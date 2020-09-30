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
import { KeyValuePipeComponent } from "./key-value-pipe.component";
import { CasePipeComponent } from "./case-pipe.component";
import { PercentPipeComponent } from "./percent-pipe.component";
import { SlicePipeComponent } from "./slice-pipe.component";
import { ExponentialPipe } from "./exponential.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DatePipeComponent,
    CurrencyPipeComponent,
    DecimalPipeComponent,
    PlurialPipeComponent,
    SelectPipeComponent,
    JsonPipeComponent,
    KeyValuePipeComponent,
    CasePipeComponent,
    PercentPipeComponent,
    SlicePipeComponent,
    ExponentialPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
