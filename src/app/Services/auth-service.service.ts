import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
export interface Credentials {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly authState$: Observable<User | null> = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {}

  get user(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({email, password}: Credentials){
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
    ;
  }

  logout() {
    console.log("eee");
    return this.fireAuth.auth.signOut();
  }

  isLoggedIn()
  {
    return this.authState$.pipe(map(state => {
      if (state !== null) { return true; }
      return false;
    }
    )
  );
}
}