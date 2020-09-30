import { Component } from '@angular/core';

@Component({
  selector: 'fetch-json-pipe',
  template: `
    <h3>Fetch json pipe</h3>
    <p>Object fetched from {{file}} is <br> <b>{{ file | fetch | json}} </b></p>`
})
export class FetchJsonPipeComponent {
  file = 'assets/starwars.json'
}