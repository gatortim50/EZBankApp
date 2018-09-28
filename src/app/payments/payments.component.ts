import { Services } from './../../../platforms/ios/build/emulator/EZBank.app/app/tns_modules/@angular/core/src/view/types.d';
import { Component, OnInit } from "@angular/core";
import { PaymentsService } from '../services/payments/payments.service';

@Component({
  selector: "Payments",
  moduleId: module.id,
  templateUrl: "./payments.component.html"
})
export class PaymentsComponent implements OnInit {
  private _amt: number = 10.00;

  constructor(private _paymentsService: PaymentsService) {
    console.dir({
      name: 'PaymentsComponent',
      type: 'Payments'
    });
  }

  ngOnInit(): void {
    this._paymentsService.postPayments();
    // Init your component properties here.
  }

}
