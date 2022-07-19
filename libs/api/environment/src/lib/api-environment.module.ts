import { Module } from '@nestjs/common';
import { config, ConfigToken } from './constants';

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
export class ApiEnvironmentModule {}
