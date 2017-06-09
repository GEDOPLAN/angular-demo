import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationComponentComponent } from './iteration-component.component';

describe('IterationComponentComponent', () => {
  let component: IterationComponentComponent;
  let fixture: ComponentFixture<IterationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
