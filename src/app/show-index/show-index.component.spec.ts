import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIndexComponent } from './show-index.component';

describe('ShowIndexComponent', () => {
  let component: ShowIndexComponent;
  let fixture: ComponentFixture<ShowIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
