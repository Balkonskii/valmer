import { Controller, Get } from '@nestjs/common';

import { SiteValueService } from '@valmer-api/shared';
import { ValueSource } from '@valmer-api/models';

@Controller()
export class AppController {
    constructor(private readonly siteValueService: SiteValueService) {}

    @Get()
    async getData() {
        const source1: ValueSource = {
            url: 'https://www.dns-shop.ru/product/e2f76961adfe2ff1/videokarta-kfa2-geforce-rtx-3080-ti-sg-38iom5md99dk/',
            valueSelector: '.product-buy__price',
            tryTimeout: 1000,
            tryCount: 10,
            waitUntil: 'networkidle2'
        };

        const source2: ValueSource = {
            url: 'https://novosibirsk.drom.ru/haval/f7/46577389.html',
            valueSelector: '.css-eazmxc.e162wx9x0',
            tryTimeout: 1000,
            tryCount: 10
        };

        const value = await this.siteValueService.getValue(source2);

        return value;
    }
}
