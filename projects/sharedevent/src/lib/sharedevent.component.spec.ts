import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedeventComponent } from './sharedevent.component';

describe('SharedeventComponent', () => {
  let component: SharedeventComponent;
  let fixture: ComponentFixture<SharedeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
