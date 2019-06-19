import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuefyComponent } from './valuefy.component';

describe('ValuefyComponent', () => {
  let component: ValuefyComponent;
  let fixture: ComponentFixture<ValuefyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuefyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuefyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
