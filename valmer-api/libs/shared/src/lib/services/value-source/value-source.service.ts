import { Inject, Injectable } from '@nestjs/common';
import { ElementHandle, launch, Page } from 'puppeteer';
import { wait } from '../../utils';
import { ValueSource } from '@valmer-api/domain';
import { Config, ConfigToken } from '@valmer-api/environment';

@Injectable()
export class ValueSourceService {
    constructor(@Inject(ConfigToken) private readonly config: Config) {}

    async getValue(source: ValueSource): Promise<string | undefined> {
        const browser = await launch({
            product: this.config.product
        });

        const page = await browser.newPage();
        await page.goto(source.url);
        if (source.waitUntil) {
            await page.waitForNavigation({ waitUntil: source.waitUntil });
        }

        if (source.timeoutAfterNavigation) {
            await wait(source.timeoutAfterNavigation);
        }

        const elements = await this.waitForElements(source, page);
        const element = elements[0];

        if (element) {
            const value = await element.getProperty('innerText');
            return await value.jsonValue();
        } else {
            return undefined;
        }
    }

    private async waitForElements(source: ValueSource, page: Page): Promise<ElementHandle[]> {
        const elementSelector = source.selectors.find((item) => item.isMain) || source.selectors[0];

        if (!elementSelector) {
            throw new Error(`Missing element selector for source ${source.id}`);
        }

        for (let i = 0; i < source.loadTryCount; i++) {
            try {
                const elements = await page.$$(elementSelector.selector);
                if (elements?.length) {
                    return elements;
                } else {
                    await wait(source.loadTryTimeout);
                }
            } catch (error) {
                await wait(source.loadTryTimeout);
            }
        }

        throw new Error(`Value was not found for source ${source.id}`);
    }
}
