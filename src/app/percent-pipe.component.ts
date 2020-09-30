import { Component } from "@angular/core";

@Component({
  selector: "percent-pipe",
  template: `
    <h3>Percent pipe</h3>
    <p> Raw number without pipe is <b> {{num}} </b> </p>
    <p> Normal percent pipe is <b> {{num | percent}} </b> </p>
    <p> Percent pipe with specific format is <b> {{num | percent:'4.3-5'}} </b> </p>
  `
})
export class PercentPipeComponent {
  num = 0.259
}