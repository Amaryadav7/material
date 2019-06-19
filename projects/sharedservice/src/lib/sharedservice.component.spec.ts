import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedserviceComponent } from './sharedservice.component';

describe('SharedserviceComponent', () => {
  let component: SharedserviceComponent;
  let fixture: ComponentFixture<SharedserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
