import { Exception } from './exception';

export class VerifyException extends Exception {
  constructor(message: string, private readonly type: string) {
    super(message);
  }
  toMessage(): string {
    return `[VerifyException] Failed ${this.type} verify \n Error Message: ${this.message}`;
  }
}
