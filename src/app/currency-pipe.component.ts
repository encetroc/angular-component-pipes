import { Component } from "@angular/core";

@Component({
  selector: "currency-pipe",
  template: `
    <h3>Currency pipe</h3>
    <p> Nomral currency is <b> {{price | currency}} </b> </p>
    <p> Specific currency is <b> {{price | currency: 'CAD'}} </b> </p>
    <p> Specific currency with code is <b> {{price | currency: 'CAD' : 'code'}} </b> </p>
    <p> Specific currency with symbol narrow is <b> {{price | currency: 'CAD' : 'symbol-narrow'}} </b> </p>
    <p> Specific currency with symbol narrow and digits info is <b> {{price | currency: 'CAD' : 'symbol-narrow' : '4.2-2'}} </b> </p>
    <p> Specific currency with symbol digits info and locale is <b> {{price | currency: 'CAD' : 'symbol' : '4.2-2' : 'en'}} </b> </p>
  `
})
export class CurrencyPipeComponent {
  price: number = 201.3495
}