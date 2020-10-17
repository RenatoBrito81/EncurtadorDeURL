import { prop, getModelForClass } from '@typegoose/typegoose';

export class URL{
    @prop({ required: true })
    urlOrigem: string;

    @prop({ required: true })
    hash: string;

    @prop({ required: true })
    urlEncurtada: string;
}

export const URLmodel = getModelForClass(URL);