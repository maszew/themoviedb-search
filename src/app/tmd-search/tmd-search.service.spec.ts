import { TestBed, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { TmdSearchService } from './tmd-search.service';

describe('TmdSearchService', () => {

  const mockResponse = {
    id: '5'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        TmdSearchService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    });
  });

  it('should be created',
    inject([TmdSearchService, XHRBackend], (service, mockBackend) =>
  {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    expect(service).toBeTruthy();
  }));
});
