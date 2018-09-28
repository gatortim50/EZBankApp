import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PaymentsRoutingModule } from "./payments-routing.module";
import { PaymentsComponent } from "./payments.component";
import { PaymentsService } from '../services/payments/payments.service';

@NgModule({
    imports: [
      NativeScriptCommonModule,
      PaymentsRoutingModule
    ],
    declarations: [
      PaymentsComponent
    ],
    providers: [
      PaymentsService
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
})
export class PaymentsModule { }
