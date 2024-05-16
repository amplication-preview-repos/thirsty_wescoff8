import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RealEstateAgentServiceBase } from "./base/realEstateAgent.service.base";

@Injectable()
export class RealEstateAgentService extends RealEstateAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
