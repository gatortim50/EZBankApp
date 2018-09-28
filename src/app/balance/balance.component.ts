import { Component, OnInit } from "@angular/core";
import { BalanceService } from '../services/balance/balance.service';

@Component({
    selector: "Balance",
    moduleId: module.id,
    templateUrl: "./balance.component.html"
})
export class BalanceComponent implements OnInit {

    private _amt: number = 1200.00;

    constructor(private _balanceService: BalanceService) {
      console.dir({
        name: 'BalanceComponent',
        type: 'Balance'
      });
      console.log("start BalanceService");
    }

    ngOnInit(): void {
      this._balanceService.getBalance()
        .subscribe(bal => {
          this._amt = bal;
        });
        console.log("BalanceService: ", this._amt);
    }
}
