import { Component } from "@angular/core";

@Component({
  selector: "primary-pipe",
  template: `
    <h3>Primary pipe</h3>
    <p>
      Array after Primary pipe <b> {{ array | primary | json }} </b>
    </p>
  `
})
export class PrimaryPipeComponent {
  array = [
    { item: "item1", primary: false },
    { item: "item2", primary: false },
    { item: "item3", primary: true },
    { item: "item4", primary: false },
    { item: "item5", primary: false }
  ];
}
