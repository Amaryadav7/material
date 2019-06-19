import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Valuefy1Component } from './valuefy1.component';

describe('Valuefy1Component', () => {
  let component: Valuefy1Component;
  let fixture: ComponentFixture<Valuefy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Valuefy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Valuefy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
