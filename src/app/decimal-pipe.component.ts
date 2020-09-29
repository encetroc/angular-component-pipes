import { Component } from "@angular/core";

@Component({
  selector: "decimal-pipe",
  template: `
    <h3>Decimal pipe</h3>
    <p> Nomral formating is <b> {{num | number}} </b> </p>
    <p> Custom formating is <b> {{num | number: '4.5-5'}} </b> </p>
    <p> Custom formating for round up is <b> {{num | number: '1.0-0'}} </b> </p>
  `
})
export class DecimalPipeComponent {
  num: number = 2.718281828459045
}