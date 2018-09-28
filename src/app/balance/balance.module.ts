import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BalanceRoutingModule } from "./balance-routing.module";
import { BalanceComponent } from "./balance.component";
import { BalanceService } from '../services/balance/balance.service';

@NgModule({
    imports: [
      NativeScriptCommonModule,
      BalanceRoutingModule
    ],
    declarations: [
      BalanceComponent
    ],
    providers: [
      BalanceService
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
})
export class BalanceModule { }
