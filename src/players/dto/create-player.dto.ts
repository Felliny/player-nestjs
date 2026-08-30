import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsString()
    name: string;

    @IsNumber()
    balance: Number;

    @IsDateString()
    createdAt: string;
}
