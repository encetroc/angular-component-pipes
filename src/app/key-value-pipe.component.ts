import { Component } from '@angular/core';

@Component({
  selector: 'key-value-pipe',
  template: `
    <h3>Keyvalue pipe</h3>
    <p> Object without keyvalue pipe <b> {{object | json }} </b> </p>
    <p> Object with keyvalue pipe <b> {{object | keyvalue | json }} </b> </p>
    <p> Map without keyvalue pipe <b> {{map | json }} </b> </p>
    <p> Map with keyvalue pipe <b> {{map | keyvalue | json }} </b> </p>
  `
})
export class KeyValuePipeComponent {
  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);
}