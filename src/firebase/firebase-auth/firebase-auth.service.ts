import { Inject, Injectable } from '@nestjs/common';
import { Auth } from 'firebase-admin/lib/auth/auth';
import { VerifyException } from 'src/exceptions/verify.exception';

@Injectable()
export class FirebaseAuthService {
  constructor(@Inject('FIREBASE_AUTH') private firebaseAuth: Auth) {}

  async verifyId(accessIdToken: string): Promise<string> {
    try {
      const uid = await (await this.firebaseAuth.verifyIdToken(accessIdToken)).uid;
      return uid;
    } catch (error) {
      throw new VerifyException(error.message, 'AccessIdToken');
    }
  }
}
