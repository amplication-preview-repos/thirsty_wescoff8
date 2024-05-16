import * as graphql from "@nestjs/graphql";
import { HouseResolverBase } from "./base/house.resolver.base";
import { House } from "./base/House";
import { HouseService } from "./house.service";

@graphql.Resolver(() => House)
export class HouseResolver extends HouseResolverBase {
  constructor(protected readonly service: HouseService) {
    super(service);
  }
}
