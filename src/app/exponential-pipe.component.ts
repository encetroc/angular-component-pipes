import { Component } from '@angular/core';

@Component({
  selector: 'exponential-pipe',
  template: `
    <h3>Exponential pipe</h3>
    <p> Raw number without pipe is <b> {{num}} </b> </p>
    <p> {{num}} to the poser of 5 using exponential pipe is <b> {{num | exponential:5}} </b> </p>
    <p> {{num}} to the poser of 10 using exponential pipe is <b> {{num | exponential:10}} </b> </p>
  `
})
export class ExponentialPipeComponent {
  num = 2
}