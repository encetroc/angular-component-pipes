import { Component } from '@angular/core';

@Component({
  selector: 'key-value-pipe',
  template: `
    <h3>Keyvalue pipe</h3>
    <span>
      <p>Object</p>
      <div *ngFor="let item of object | keyvalue">
        {{item.key}}:{{item.value}}
      </div>
      <p>Map</p>
      <div>
        {{map | json}}
      </div>
      <div *ngFor="let item of map | keyvalue">
        {{item.key}}:{{item.value}}
      </div>
    </span>
  `
})
export class KeyValuePipeComponent {
  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);
}