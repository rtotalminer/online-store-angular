import { Injectable, inject } from '@angular/core';
import {
    Auth, 
    createUserWithEmailAndPassword , 
    signOut ,
    signInWithEmailAndPassword,
    user
} from '@angular/fire/auth';

import { IAuth } from '../core/interfaces/auth.interface';
import { IHttpError } from '../core/interfaces/http-error.interface';


import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })


export class FirebaseService {
    private auth: Auth = inject(Auth);
    
    public user$ = user(this.auth);

    constructor(
        
    ) {
    }

    signUp({email, password}: IAuth) {
        createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    signIn({email, password}: IAuth) {
        signInWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            return [userCredential];
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
        console.log(this.auth)
    }
}