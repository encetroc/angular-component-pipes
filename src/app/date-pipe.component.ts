import { Component } from "@angular/core";

@Component({
  selector: "date-pipe",
  template: `
    <h3>Date pipe</h3>
    <p> Raw date without pipe is <b> {{date}} </b> </p>
    <p> Nomral date is <b> {{date | date}} </b> </p>
    <p> Short date is <b> {{date | date:'shortDate'}} </b> </p>
    <p> Full date is <b> {{date | date:'fullDate'}} </b> </p>
    <p> Custom date is <b> {{date | date:'MM/dd/yy'}} </b> </p>
    <p> Full date time is <b> {{date | date:'full'}} </b> </p>
    <p> Full time only is <b> {{date | date:'fullTime'}} </b> </p>
  `
})
export class DatePipeComponent {
  date = Date.now()
}