import { AnyARecord } from "dns";

export interface Sensitive{
    token: string;
    userIDs: Array<string>;
    messages: Array<string>;
    responses: any;
}