import { Module } from "@nestjs/common";
import { KeyModuleBase } from "./base/key.module.base";
import { KeyService } from "./key.service";
import { KeyController } from "./key.controller";
import { KeyResolver } from "./key.resolver";

@Module({
  imports: [KeyModuleBase],
  controllers: [KeyController],
  providers: [KeyService, KeyResolver],
  exports: [KeyService],
})
export class KeyModule {}
