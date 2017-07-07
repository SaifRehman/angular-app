import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuardianComponent } from './view-guardian.component';

describe('ViewGuardianComponent', () => {
  let component: ViewGuardianComponent;
  let fixture: ComponentFixture<ViewGuardianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGuardianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuardianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
