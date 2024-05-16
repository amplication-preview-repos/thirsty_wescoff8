import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KeyServiceBase } from "./base/key.service.base";

@Injectable()
export class KeyService extends KeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
