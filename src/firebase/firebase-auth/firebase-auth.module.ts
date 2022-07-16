import { Module } from '@nestjs/common';
import { firebaseAuthProvider } from './firbase-auth-provider';
@Module({
    providers: [...firebaseAuthProvider],
    exports: [...firebaseAuthProvider]
})
export class FirebaseAuthModule {}
