import { Component } from "@angular/core";

@Component({
  selector: "case-pipe",
  template: `
    <h3>Case pipes</h3>
    <p> Raw string without pipe is <b> {{str}} </b> </p>
    <p> Lowercase string  is <b> {{str | lowercase}} </b> </p>
    <p> Uppercase string <b> {{str | uppercase}} </b> </p>
    <p> Titlecase string is <b> {{str | titlecase}} </b> </p>
  `
})
export class CasePipeComponent {
  str = 'tHIs is A raNdoM StriNg'
}