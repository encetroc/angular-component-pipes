import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DatePipeComponent } from "./date-pipe.component";
import { CurrencyPipeComponent } from "./currency-pipe.component";
import { DecimalPipeComponent } from "./decimal-pipe.component";
import { PlurialPipeComponent } from "./plurial-pipe.component";
import { SelectPipeComponent } from "./select-pipe.component";
import { JsonPipeComponent } from "./json-pipe.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DatePipeComponent,
    CurrencyPipeComponent,
    DecimalPipeComponent,
    PlurialPipeComponent,
    SelectPipeComponent,
    JsonPipeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
