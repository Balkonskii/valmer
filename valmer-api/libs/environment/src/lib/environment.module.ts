import { Module } from '@nestjs/common';
import { ConfigToken } from './token';
import { config } from './config.dev';

@Module({
    providers: [
        {
            provide: ConfigToken,
            useValue: config
        }
    ],
    exports: []
})
export class EnvironmentModule {}
