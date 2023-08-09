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

import { IAuth } from '../data/interfaces/auth.interface';

@Injectable({ providedIn: 'root' })


export class FirebaseService {
    public auth: Auth = inject(Auth);
    
    public user$ = user(this.auth);

    constructor(
        
    ) {
    }

    // Not in use because I cannot bind then subscription outside of this service
    signUp({email, password}: IAuth) {
        createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    // Not in use because I cannot bind then subscription outside of this service
    signIn({email, password}: IAuth) {
        signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            return userCredential;
        })
        .catch((error) => {
            const errorCode : number = error.code;
            const errorMessage : string = error.message;
            return errorMessage;
        });
    }

    getUserState() {
        return this.auth.currentUser
    }

    logout() {
        this.auth.signOut()
    }
}