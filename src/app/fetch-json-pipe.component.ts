import { Component } from '@angular/core';

@Component({
  selector: 'fetch-json-pipe',
  template: `
    <h3>Fetch json pipe</h3>
    <p>Object fetched is <br> <b>{{'assets/heroes.json' | fetch | json}} </b></p>`
})
export class FetchJsonPipeComponent { }