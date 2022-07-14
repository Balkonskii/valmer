import { Inject, Injectable } from '@nestjs/common';
import { ValueSource } from '@valmer-api/models';
import { launch } from 'puppeteer';
import { Config, ConfigToken } from '@valmer-api/environment';

@Injectable()
export class SiteValueService {
    // constructor(@Inject(ConfigToken) private readonly config: Config) {}

    async getValue(source: ValueSource): Promise<string | undefined> {
        const browser = await launch({
            // product: this.config.product
            product: 'chrome'
        });

        const page = await browser.newPage();
        await page.goto(source.url);
        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log(1);

        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve();
            }, 6000);
        });

        const elements = await page.$$(source.valueSelector);
        console.log(2);
        const element = elements[0];
        console.log(3);

        if (element) {
            const value = await element.getProperty('innerText');
            return await value.jsonValue();
        } else {
            return undefined;
        }
    }
}
