import { Injectable, inject } from '@angular/core';
import {
    Auth, 
    createUserWithEmailAndPassword , 
    signOut ,
    signInWithEmailAndPassword
} from '@angular/fire/auth';
import { IAuth } from '../core/interfaces/auth.interface';

@Injectable({ providedIn: 'root' })


export class FirebaseService {
    private auth: Auth = inject(Auth)

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
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
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