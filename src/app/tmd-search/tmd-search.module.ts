import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'

import { TmdSearchComponent } from './tmd-search.component';
import { TmdSearchService } from './tmd-search.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    TmdSearchComponent
  ],
  declarations: [TmdSearchComponent],
  providers: [TmdSearchService]
})
export class TmdSearchModule { }
