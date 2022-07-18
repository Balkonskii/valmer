import { Injectable } from '@nestjs/common';
import { ValueSource } from '@valmer-api/models';
import { ElementHandle, launch, Page } from 'puppeteer';
import { wait } from '../../utils';

@Injectable()
export class SourceValueService {
    // constructor(@Inject(ConfigToken) private readonly config: Config) {}

    async getValue(source: ValueSource): Promise<string | undefined> {
        const browser = await launch({
            // product: this.config.product
            product: 'chrome'
        });

        const page = await browser.newPage();
        await page.goto(source.url);
        await page.setDefaultNavigationTimeout(60000);
        if (source.waitUntil) {
            await page.waitForNavigation({ waitUntil: source.waitUntil });
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

    private async waitForElements(source: ValueSource, page: Page): Promise<ElementHandle<Element>[]> {
        for (let i = 0; i < source.tryCount; i++) {
            try {
                const elements = await page.$$(source.valueSelector);
                if (elements?.length) {
                    return elements;
                } else {
                    await wait(source.tryTimeout);
                }
            } catch (error) {
                await wait(source.tryTimeout);
            }
        }

        throw new Error('Value was not found');
    }
}
