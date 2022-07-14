import { Module } from '@nestjs/common';
import { SiteValueService } from './services';

@Module({
    controllers: [],
    providers: [SiteValueService],
    exports: []
})
export class SharedModule {}
