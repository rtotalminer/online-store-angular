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

    handleResetPassword(auth, actionCode, continueUrl, lang, newPassword) {
        verifyPasswordResetCode(auth, actionCode).then((email) => {
          const accountEmail = email;
      
          confirmPasswordReset(auth, actionCode, newPassword).then((resp) => {
            return "success";
          }).catch((error) => {
                return "error";
            }); 
        }).catch((error) => {
            return "error";
        });
    }

}