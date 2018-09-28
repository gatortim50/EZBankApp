import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
      AppComponent
    ],
    imports: [
      NativeScriptModule,
      NativeScriptHttpModule,
      HttpClientModule,
      AppRoutingModule
    ],
    providers: [
      HttpClientModule
    ],
    declarations: [
      AppComponent
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
