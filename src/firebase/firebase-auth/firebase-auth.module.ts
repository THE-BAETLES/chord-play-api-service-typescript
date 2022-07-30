import { Module } from '@nestjs/common';
import { firebaseAuthProvider } from './firebase-auth.providers';
import { FirebaseAuthService } from './firebase-auth.service';
@Module({
  providers: [...firebaseAuthProvider, FirebaseAuthService],
  exports: [...firebaseAuthProvider],
})
export class FirebaseAuthModule {}
