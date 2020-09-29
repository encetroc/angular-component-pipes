import { Component } from "@angular/core";

@Component({
  selector: "select-pipe",
  template: `
    <h3>Select pipe</h3>
    <p> If male <b> {{'male' | i18nSelect: inviteMap}} </b> </p>
    <p> If female <b> {{'female' | i18nSelect: inviteMap}} </b> </p>
    <p> If other <b> {{'other' | i18nSelect: inviteMap}} </b> </p>
  `
})
export class SelectPipeComponent {
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'}
}