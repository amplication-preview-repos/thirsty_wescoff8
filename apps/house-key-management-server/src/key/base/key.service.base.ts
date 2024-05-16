/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Key as PrismaKey,
  Client as PrismaClient,
  House as PrismaHouse,
} from "@prisma/client";

export class KeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.KeyCountArgs, "select">): Promise<number> {
    return this.prisma.key.count(args);
  }

  async keys<T extends Prisma.KeyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.KeyFindManyArgs>
  ): Promise<PrismaKey[]> {
    return this.prisma.key.findMany<Prisma.KeyFindManyArgs>(args);
  }
  async key<T extends Prisma.KeyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.KeyFindUniqueArgs>
  ): Promise<PrismaKey | null> {
    return this.prisma.key.findUnique(args);
  }
  async createKey<T extends Prisma.KeyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.KeyCreateArgs>
  ): Promise<PrismaKey> {
    return this.prisma.key.create<T>(args);
  }
  async updateKey<T extends Prisma.KeyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.KeyUpdateArgs>
  ): Promise<PrismaKey> {
    return this.prisma.key.update<T>(args);
  }
  async deleteKey<T extends Prisma.KeyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.KeyDeleteArgs>
  ): Promise<PrismaKey> {
    return this.prisma.key.delete(args);
  }

  async getClient(parentId: string): Promise<PrismaClient | null> {
    return this.prisma.key
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }

  async getHouse(parentId: string): Promise<PrismaHouse | null> {
    return this.prisma.key
      .findUnique({
        where: { id: parentId },
      })
      .house();
  }
}
