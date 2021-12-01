import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header.component';
import { ColorComponent } from './ui/colorPreview.component';
import { FooterComponent } from './ui/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
