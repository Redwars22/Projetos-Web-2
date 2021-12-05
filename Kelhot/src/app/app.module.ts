import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/components/header.component';
import { ConverterComponent } from './ui/components/converter.component';
import { FooterComponent } from './ui/components/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
