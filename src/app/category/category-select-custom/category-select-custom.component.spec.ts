import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySelectCustomComponent } from './category-select-custom.component';

describe('CategorySelectCustomComponent', () => {
  let component: CategorySelectCustomComponent;
  let fixture: ComponentFixture<CategorySelectCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySelectCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySelectCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
