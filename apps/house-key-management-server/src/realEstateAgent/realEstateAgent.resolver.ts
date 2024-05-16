import * as graphql from "@nestjs/graphql";
import { RealEstateAgentResolverBase } from "./base/realEstateAgent.resolver.base";
import { RealEstateAgent } from "./base/RealEstateAgent";
import { RealEstateAgentService } from "./realEstateAgent.service";

@graphql.Resolver(() => RealEstateAgent)
export class RealEstateAgentResolver extends RealEstateAgentResolverBase {
  constructor(protected readonly service: RealEstateAgentService) {
    super(service);
  }
}
