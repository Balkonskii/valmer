import { Controller, Get } from '@nestjs/common';

import { ValueSourceService } from '@valmer-api/shared';
import { ValueSelectorType, ValueSource } from '@valmer-api/domain';

@Controller()
export class AppController {
    constructor(private readonly valueSourceService: ValueSourceService) {}

    @Get()
    async getData() {
        const source1: ValueSource = {
            id: '',
            url: 'https://www.dns-shop.ru/product/e2f76961adfe2ff1/videokarta-kfa2-geforce-rtx-3080-ti-sg-38iom5md99dk/',
            loadTryTimeout: 1000,
            loadTryCount: 10,
            waitUntil: 'networkidle2',
            selectors: [
                {
                    id: '',
                    selector: '.product-buy__price',
                    isMain: true,
                    type: ValueSelectorType.Price
                }
            ]
        };

        const source2: ValueSource = {
            id: '',
            url: 'https://novosibirsk.drom.ru/haval/f7/46577389.html',
            loadTryTimeout: 1000,
            loadTryCount: 10,
            selectors: [
                {
                    id: '',
                    selector: '.css-eazmxc.e162wx9x0',
                    isMain: true,
                    type: ValueSelectorType.Price
                }
            ]
        };

        return await this.valueSourceService.getValue(source1);
    }
}
