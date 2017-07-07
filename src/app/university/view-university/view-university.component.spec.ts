import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUniversityComponent } from './view-university.component';

describe('ViewUniversityComponent', () => {
  let component: ViewUniversityComponent;
  let fixture: ComponentFixture<ViewUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
