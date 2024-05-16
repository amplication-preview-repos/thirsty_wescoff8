import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RealEstateAgentService } from "./realEstateAgent.service";
import { RealEstateAgentControllerBase } from "./base/realEstateAgent.controller.base";

@swagger.ApiTags("realEstateAgents")
@common.Controller("realEstateAgents")
export class RealEstateAgentController extends RealEstateAgentControllerBase {
  constructor(protected readonly service: RealEstateAgentService) {
    super(service);
  }
}
