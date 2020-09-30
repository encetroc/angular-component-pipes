import { Component } from "@angular/core";

@Component({
  selector: "fetch-json-pipe",
  template: `
    <h3>Date pipe</h3>
    <p> Raw date without pipe is <b> {{'assets/heroes.json'}} </b> </p>
  `
})
export class FetchJsonPipeComponent {
}