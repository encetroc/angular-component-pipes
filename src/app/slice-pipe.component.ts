import { Component } from "@angular/core";

@Component({
  selector: "slice-pipe",
  template: `
    <h3>Slice pipe</h3>
    <p> Raw string without pipe is <b> {{str}} </b> </p>
    <p> String slice from 1 to 4 is <b> {{str | slice:1:4}} </b> </p>
    <p> String slice from 1 to 4 (backward) is <b> {{str | slice:-4:-1}} </b> </p>
    <p> String slice from start to 4 is <b> {{str | slice:4}} </b> </p>
    <p> String slice from end to 4 (backward) is <b> {{str | slice:-4}} </b> </p>
  `
})
export class SlicePipeComponent {
  str = 'abcdefghij'
}