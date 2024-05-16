import * as graphql from "@nestjs/graphql";
import { KeyResolverBase } from "./base/key.resolver.base";
import { Key } from "./base/Key";
import { KeyService } from "./key.service";

@graphql.Resolver(() => Key)
export class KeyResolver extends KeyResolverBase {
  constructor(protected readonly service: KeyService) {
    super(service);
  }
}
