import { Exception } from "../exception";

export class ResourceLimitException extends Exception {
    constructor(message, private readonly type){
        super(message)
    }
}