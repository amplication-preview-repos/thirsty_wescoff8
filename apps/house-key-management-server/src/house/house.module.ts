import { Module } from "@nestjs/common";
import { HouseModuleBase } from "./base/house.module.base";
import { HouseService } from "./house.service";
import { HouseController } from "./house.controller";
import { HouseResolver } from "./house.resolver";

@Module({
  imports: [HouseModuleBase],
  controllers: [HouseController],
  providers: [HouseService, HouseResolver],
  exports: [HouseService],
})
export class HouseModule {}
