import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WjGridModule,
    WjGridSearchModule,
    WjGridFilterModule,
    WjGaugeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
