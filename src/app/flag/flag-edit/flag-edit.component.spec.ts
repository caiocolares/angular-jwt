import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagEditComponent } from './flag-edit.component';

describe('FlagEditComponent', () => {
  let component: FlagEditComponent;
  let fixture: ComponentFixture<FlagEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
