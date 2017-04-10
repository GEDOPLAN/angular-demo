import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfullComponent } from './colorfull.component';

describe('ColorfullComponent', () => {
  let component: ColorfullComponent;
  let fixture: ComponentFixture<ColorfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
