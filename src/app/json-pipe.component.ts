import { Component } from "@angular/core";

@Component({
  selector: "json-pipe",
  template: `
    <h3>Json pipe</h3>
    <p> Object without json pipe <b> {{myObject}} </b> </p>
    <p> Object with json pipe <br> <b> {{myObject | json}} </b> </p>
  `
})
export class JsonPipeComponent {
  myObject: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}}
}