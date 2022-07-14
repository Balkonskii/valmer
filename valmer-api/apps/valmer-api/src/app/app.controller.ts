import { Controller, Get } from '@nestjs/common';

import { SiteValueService } from '@valmer-api/shared';
import { ValueSource } from '@valmer-api/models';

@Controller()
export class AppController {
    constructor(private readonly siteValueService: SiteValueService) {}

    @Get()
    async getData() {
        const source: ValueSource = {
            url: 'https://www.dns-shop.ru/product/e2f76961adfe2ff1/videokarta-kfa2-geforce-rtx-3080-ti-sg-38iom5md99dk/',
            valueSelector: '.product-buy__price'
        };

        const value = await this.siteValueService.getValue(source);

        return value;
    }
}
