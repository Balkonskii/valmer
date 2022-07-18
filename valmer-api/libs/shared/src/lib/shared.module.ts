import { Module } from '@nestjs/common';
import { ValueSourceService } from './services';
import { EnvironmentModule } from '@valmer-api/environment';

@Module({
    imports: [EnvironmentModule],
    providers: [ValueSourceService],
    exports: [ValueSourceService]
})
export class SharedModule {}
