import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUniversitiesComponent } from './list-universities.component';

describe('ListUniversitiesComponent', () => {
  let component: ListUniversitiesComponent;
  let fixture: ComponentFixture<ListUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
