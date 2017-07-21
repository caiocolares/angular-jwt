import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorSelectCustomComponent } from './sector-select-custom.component';

describe('SectorSelectCustomComponent', () => {
  let component: SectorSelectCustomComponent;
  let fixture: ComponentFixture<SectorSelectCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorSelectCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorSelectCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
