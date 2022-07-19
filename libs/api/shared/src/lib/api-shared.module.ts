import { Module } from '@nestjs/common';
import { ApiEnvironmentModule } from '@valmer/api/environment';
import { ValueSourceService } from './services';

@Module({
    imports: [ApiEnvironmentModule],
    providers: [ValueSourceService],
    exports: [ValueSourceService]
})
export class ApiSharedModule {}
