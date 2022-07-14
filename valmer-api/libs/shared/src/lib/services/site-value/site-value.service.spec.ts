import { Test, TestingModule } from '@nestjs/testing';
import { SiteValueService } from './site-value.service';

describe('SiteValueService', () => {
  let service: SiteValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteValueService],
    }).compile();

    service = module.get<SiteValueService>(SiteValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
