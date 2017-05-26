import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInsComponent } from './build-ins.component';

describe('BuildInsComponent', () => {
  let component: BuildInsComponent;
  let fixture: ComponentFixture<BuildInsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildInsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
