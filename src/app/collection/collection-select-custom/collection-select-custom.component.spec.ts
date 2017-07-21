import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionSelectCustomComponent } from './collection-select-custom.component';

describe('CollectionSelectCustomComponent', () => {
  let component: CollectionSelectCustomComponent;
  let fixture: ComponentFixture<CollectionSelectCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionSelectCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionSelectCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
