import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GryDescriptionComponent } from './gry-description.component';

describe('GryDescriptionComponent', () => {
  let component: GryDescriptionComponent;
  let fixture: ComponentFixture<GryDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GryDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GryDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
