import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { tagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class DeleteOnetagArgs {

    @Field(() => tagWhereUniqueInput, {nullable:false})
    where!: tagWhereUniqueInput;
}
