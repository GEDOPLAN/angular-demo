import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirektiveComponent } from './direktive.component';

describe('DirektiveComponent', () => {
  let component: DirektiveComponent;
  let fixture: ComponentFixture<DirektiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirektiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirektiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
