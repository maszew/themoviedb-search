import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TmdSearchModule } from './tmd-search/tmd-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    TmdSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
