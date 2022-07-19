import { Module } from '@nestjs/common';

import { ApiSharedModule } from '@valmer/api/shared';

import { AppController } from './app.controller';

@Module({
    imports: [ApiSharedModule],
    controllers: [AppController],
    providers: []
})
export class AppModule {}
