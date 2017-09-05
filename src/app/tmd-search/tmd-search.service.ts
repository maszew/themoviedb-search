import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import * as config from "./config.json";

@Injectable()
export class TmdSearchService {

  constructor(private http: Http) {}

}
