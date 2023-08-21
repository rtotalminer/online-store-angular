import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })


export class FakeStoreService {

    constructor (private http: HttpClient) {}

    getProducts(url: string) {
        return this.http.get(url)
    }
}