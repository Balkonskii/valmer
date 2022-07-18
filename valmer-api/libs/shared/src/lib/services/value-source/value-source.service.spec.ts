import { Test, TestingModule } from '@nestjs/testing';
import { ValueSourceService } from './value-source.service';

describe('ValueSourceService', () => {
    let service: ValueSourceService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ValueSourceService]
        }).compile();

        service = module.get<ValueSourceService>(ValueSourceService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
