/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { HouseUpdateManyWithoutRealEstateAgentsInput } from "./HouseUpdateManyWithoutRealEstateAgentsInput";
import { Type } from "class-transformer";

@InputType()
class RealEstateAgentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => HouseUpdateManyWithoutRealEstateAgentsInput,
  })
  @ValidateNested()
  @Type(() => HouseUpdateManyWithoutRealEstateAgentsInput)
  @IsOptional()
  @Field(() => HouseUpdateManyWithoutRealEstateAgentsInput, {
    nullable: true,
  })
  houses?: HouseUpdateManyWithoutRealEstateAgentsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;
}

export { RealEstateAgentUpdateInput as RealEstateAgentUpdateInput };