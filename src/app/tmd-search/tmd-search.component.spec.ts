import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { TmdSearchComponent } from './tmd-search.component';
import { TmdSearchService } from './tmd-search.service';

describe('TmdSearchComponent', () => {
  let component: TmdSearchComponent;
  let fixture: ComponentFixture<TmdSearchComponent>;

  class TmdSearchServiceStub {
    makeRequest(route: string): Observable<any> {
      return new Observable((observer) => {
        observer.complete();
      });
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TmdSearchComponent],
      providers: [
        {provide: TmdSearchService, useClass: TmdSearchServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain input field', () => {
    expect(component).toBeTruthy();
    let input = fixture.nativeElement.querySelector('input#tmd-search-input');
    expect(input).not.toBeNull();
  });

  it('should contain button', () => {
    expect(component).toBeTruthy();
    let button = fixture.nativeElement.querySelector('button#tmd-search-button');
    expect(button).not.toBeNull();
    expect(button.innerHTML).toEqual('Search');
  });
});
