import { Module } from "@nestjs/common";
import { RealEstateAgentModuleBase } from "./base/realEstateAgent.module.base";
import { RealEstateAgentService } from "./realEstateAgent.service";
import { RealEstateAgentController } from "./realEstateAgent.controller";
import { RealEstateAgentResolver } from "./realEstateAgent.resolver";

@Module({
  imports: [RealEstateAgentModuleBase],
  controllers: [RealEstateAgentController],
  providers: [RealEstateAgentService, RealEstateAgentResolver],
  exports: [RealEstateAgentService],
})
export class RealEstateAgentModule {}
