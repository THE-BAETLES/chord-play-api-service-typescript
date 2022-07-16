import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase-admin';
import { applicationDefault, getApp } from 'firebase-admin/app';

const app = initializeApp({
    credential: applicationDefault()
})

@Injectable()
export class FirebaseAuthService {}
