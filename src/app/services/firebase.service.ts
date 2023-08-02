import { Injectable, inject } from '@angular/core';
import {
    Auth, 
    createUserWithEmailAndPassword , 
    signOut ,
    signInWithEmailAndPassword
} from '@angular/fire/auth';

import { IAuth } from '../core/interfaces/auth.interface';
import { IHttpError } from '../core/interfaces/http-error.interface';


import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../data/models/user.model';

@Injectable({ providedIn: 'root' })


export class FirebaseService {
    private auth: Auth = inject(Auth);

    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;
    
    constructor(
        
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();
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
            console.log("THEN RAN");
            console.log(userCredential)
            return [userCredential];
        })
        .catch((error) => {
            console.log("ERR RAN");
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