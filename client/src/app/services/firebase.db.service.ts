import { Injectable, inject } from '@angular/core';
import {
    Auth, 
    createUserWithEmailAndPassword , 
    signOut ,
    signInWithEmailAndPassword,
    user,
    verifyPasswordResetCode,
    confirmPasswordReset
} from '@angular/fire/auth';


@Injectable({ providedIn: 'root' })
export class FirebaseDbService {

    constructor(
        
    ) {
    }
}