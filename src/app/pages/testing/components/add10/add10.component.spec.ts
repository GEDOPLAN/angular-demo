import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add10Component } from './add10.component';
import { CalculateService } from '../../services/calculate.service';

describe('Add10Component', () => {
  let component: Add10Component;
  let fixture: ComponentFixture<Add10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Add10Component],
      providers: [CalculateService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 10 to input', () => {
    expect(component).toBeTruthy();
    component.base = 5;
    component.ngOnChanges();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toEqual('15');
  });
});
