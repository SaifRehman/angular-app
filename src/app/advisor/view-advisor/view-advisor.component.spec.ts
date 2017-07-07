import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdvisorComponent } from './view-advisor.component';

describe('ViewAdvisorComponent', () => {
  let component: ViewAdvisorComponent;
  let fixture: ComponentFixture<ViewAdvisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdvisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
