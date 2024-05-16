/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Key } from "./Key";
import { KeyCountArgs } from "./KeyCountArgs";
import { KeyFindManyArgs } from "./KeyFindManyArgs";
import { KeyFindUniqueArgs } from "./KeyFindUniqueArgs";
import { CreateKeyArgs } from "./CreateKeyArgs";
import { UpdateKeyArgs } from "./UpdateKeyArgs";
import { DeleteKeyArgs } from "./DeleteKeyArgs";
import { Client } from "../../client/base/Client";
import { House } from "../../house/base/House";
import { KeyService } from "../key.service";
@graphql.Resolver(() => Key)
export class KeyResolverBase {
  constructor(protected readonly service: KeyService) {}

  async _keysMeta(
    @graphql.Args() args: KeyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Key])
  async keys(@graphql.Args() args: KeyFindManyArgs): Promise<Key[]> {
    return this.service.keys(args);
  }

  @graphql.Query(() => Key, { nullable: true })
  async key(@graphql.Args() args: KeyFindUniqueArgs): Promise<Key | null> {
    const result = await this.service.key(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Key)
  async createKey(@graphql.Args() args: CreateKeyArgs): Promise<Key> {
    return await this.service.createKey({
      ...args,
      data: {
        ...args.data,

        client: args.data.client
          ? {
              connect: args.data.client,
            }
          : undefined,

        house: args.data.house
          ? {
              connect: args.data.house,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Key)
  async updateKey(@graphql.Args() args: UpdateKeyArgs): Promise<Key | null> {
    try {
      return await this.service.updateKey({
        ...args,
        data: {
          ...args.data,

          client: args.data.client
            ? {
                connect: args.data.client,
              }
            : undefined,

          house: args.data.house
            ? {
                connect: args.data.house,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Key)
  async deleteKey(@graphql.Args() args: DeleteKeyArgs): Promise<Key | null> {
    try {
      return await this.service.deleteKey(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Client, {
    nullable: true,
    name: "client",
  })
  async getClient(@graphql.Parent() parent: Key): Promise<Client | null> {
    const result = await this.service.getClient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => House, {
    nullable: true,
    name: "house",
  })
  async getHouse(@graphql.Parent() parent: Key): Promise<House | null> {
    const result = await this.service.getHouse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
