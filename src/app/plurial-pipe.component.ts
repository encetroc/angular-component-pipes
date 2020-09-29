import { Component } from "@angular/core";

@Component({
  selector: "plurial-pipe",
  template: `
    <h3>Plurial pipe</h3>
    <p> If no messages <b> {{noMessages.length | i18nPlural: messageMapping}} </b> </p>
    <p> If no messages <b> {{oneMessage.length | i18nPlural: messageMapping}} </b> </p>
    <p> If no messages <b> {{manyMessages.length | i18nPlural: messageMapping}} </b> </p>
  `
})
export class PlurialPipeComponent {
  noMessages = []
  oneMessage = ['Message 1']
  manyMessages = ['Message 1', 'Message 2', 'Message 3']
  messageMapping: {[k: string]: string} = {'=0': 'No messages.', '=1': 'One message.', 'other': '# messages.'}
}