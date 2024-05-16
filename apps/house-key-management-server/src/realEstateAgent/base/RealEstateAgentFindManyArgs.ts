/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RealEstateAgentWhereInput } from "./RealEstateAgentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RealEstateAgentOrderByInput } from "./RealEstateAgentOrderByInput";

@ArgsType()
class RealEstateAgentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RealEstateAgentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RealEstateAgentWhereInput, { nullable: true })
  @Type(() => RealEstateAgentWhereInput)
  where?: RealEstateAgentWhereInput;

  @ApiProperty({
    required: false,
    type: [RealEstateAgentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RealEstateAgentOrderByInput], { nullable: true })
  @Type(() => RealEstateAgentOrderByInput)
  orderBy?: Array<RealEstateAgentOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RealEstateAgentFindManyArgs as RealEstateAgentFindManyArgs };
