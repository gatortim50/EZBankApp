import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

// import { IPayments } from './payments';

@Injectable()
export class PaymentsService {

    private Url = "http://ezbanking.gear.host/api/Money/Payment";
    // http://ezbanking.gear.host/api/Money/Payment
    // {"balance":{"amount":1200.00},"ok":true,"message":""}

    constructor(private http: HttpClient) { }

    postPayments() {
      this.http.post(this.Url,
        {
          "amount": 37.35,
          "deviceId": "iphone6",
          "locationLat": "27",
          "locationLng": "32"
        })
        .subscribe(
        (val) => {
          console.log("POST call successful value: ", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is completed.");
        });
    }

}
