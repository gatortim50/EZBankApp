import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

// import { IBalance } from './balance';

@Injectable()
export class BalanceService {

    private Url = "http://ezbanking.gear.host/api/Money/Balance";
    // http://ezbanking.gear.host/api/Money/Balance
    // {"balance":{"amount":1200.00},"ok":true,"message":""}

    constructor(private http: HttpClient) { }

    getBalance(): Observable<any> {
      return this.http.get(this.Url, {responseType: 'json'} );
    }

}
