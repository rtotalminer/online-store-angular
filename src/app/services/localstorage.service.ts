import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public dataStore = new Map<string, any>();

  constructor() {
  }

  setData(key: string, data: string) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(key, jsonData)
  }

  getData(key: string) {
    return localStorage.getItem(key) 
  }

  removeData(key) {
    localStorage.removeItem(key)
  }
}

