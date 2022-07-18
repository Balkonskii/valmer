import { Module } from '@nestjs/common';
import { ConfigToken } from './token';
import { config } from './config.dev';

const PROVIDERS = [
    {
        provide: ConfigToken,
        useValue: config
    }
];

@Module({
    providers: [...PROVIDERS],
    exports: [...PROVIDERS]
})
export class EnvironmentModule {}
