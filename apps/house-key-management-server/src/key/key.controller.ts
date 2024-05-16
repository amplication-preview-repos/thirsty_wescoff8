import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { KeyService } from "./key.service";
import { KeyControllerBase } from "./base/key.controller.base";

@swagger.ApiTags("keys")
@common.Controller("keys")
export class KeyController extends KeyControllerBase {
  constructor(protected readonly service: KeyService) {
    super(service);
  }
}
