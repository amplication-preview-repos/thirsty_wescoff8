import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HouseServiceBase } from "./base/house.service.base";

@Injectable()
export class HouseService extends HouseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
