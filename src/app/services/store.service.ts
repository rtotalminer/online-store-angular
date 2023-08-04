import {Injectable} from '@angular/core';
import { FirebaseService } from './firebase.service';
import { User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public dataStore = new Map<string, any>();

  constructor() {
  }

  addData(key: string, data: any) {
    this.dataStore.set(key, data);
  }

  getData(key: string) {
    if (this.dataStore.has(key)) {
       return this.dataStore.get(key);
    }
    return undefined;
    
  }

  clearData(key: string) {
    if (this.dataStore.has(key)) {
        this.dataStore.delete(key);
    }
  }
}