import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdSearchComponent } from './tmd-search.component';

describe('TmdSearchComponent', () => {
  let component: TmdSearchComponent;
  let fixture: ComponentFixture<TmdSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdSearchComponent ]
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
});
