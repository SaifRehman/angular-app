import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuardiansComponent } from './list-guardians.component';

describe('ListGuardiansComponent', () => {
  let component: ListGuardiansComponent;
  let fixture: ComponentFixture<ListGuardiansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGuardiansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuardiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
