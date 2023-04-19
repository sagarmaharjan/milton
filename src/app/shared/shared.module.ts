import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ValidateAndSubmit } from "./validate-and-submit/validate-and-submit";

@NgModule({
    declarations: [
        ValidateAndSubmit
    ],
      imports: [
        CommonModule,
      ],
      exports: [
        ValidateAndSubmit
      ]
})

export class SharedModule {}