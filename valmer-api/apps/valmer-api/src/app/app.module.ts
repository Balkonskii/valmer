import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { EnvironmentModule } from '@valmer-api/environment';
import { SharedModule } from '@valmer-api/shared';

@Module({
    imports: [EnvironmentModule, SharedModule],
    controllers: [AppController],
    providers: []
})
export class AppModule {}
