import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })


export class UserService {
    private auth: Auth = inject(Auth)

    constructor(
        
    ) {
        
    }

    getUser() {
        console.log(this.auth)
    }

    signUp(email: string, password: string) {
        createUserWithEmailAndPassword(this.auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
}