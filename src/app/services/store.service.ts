import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private dataStore = new Map<any, any>();;

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