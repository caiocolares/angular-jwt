import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPoweredComponent } from './footer-powered.component';

describe('FooterPoweredComponent', () => {
  let component: FooterPoweredComponent;
  let fixture: ComponentFixture<FooterPoweredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPoweredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPoweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
