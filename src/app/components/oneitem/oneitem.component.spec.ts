import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneitemComponent } from './oneitem.component';

describe('OneitemComponent', () => {
  let component: OneitemComponent;
  let fixture: ComponentFixture<OneitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
