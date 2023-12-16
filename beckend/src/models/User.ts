import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
    @Field(__Type => ID)
    id: String;

    @Field()
    name : String;
}