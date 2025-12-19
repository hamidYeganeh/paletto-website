import { Test, TestingModule } from "@nestjs/testing";
import { ArtworksCreateService } from "./services/artworks-create.service";
import { ArtworksFindOneService } from "./services/artworks-find-one.service";
import { ArtworksListService } from "./services/artworks-list.service";
import { ArtworksUpdateService } from "./services/artworks-update.service";
import { ArtworksService } from "./artworks.service";

describe("ArtworksService", () => {
  let service: ArtworksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArtworksService,
        {
          provide: ArtworksListService,
          useValue: {},
        },
        {
          provide: ArtworksCreateService,
          useValue: {},
        },
        {
          provide: ArtworksUpdateService,
          useValue: {},
        },
        {
          provide: ArtworksFindOneService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ArtworksService>(ArtworksService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
