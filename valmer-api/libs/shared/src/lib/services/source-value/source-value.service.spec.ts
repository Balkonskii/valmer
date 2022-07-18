import { Test, TestingModule } from '@nestjs/testing';
import { SourceValueService } from './source-value.service';

describe('SourceValueService', () => {
    let service: SourceValueService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SourceValueService]
        }).compile();

        service = module.get<SourceValueService>(SourceValueService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
