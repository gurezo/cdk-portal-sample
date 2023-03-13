import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DialogModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
