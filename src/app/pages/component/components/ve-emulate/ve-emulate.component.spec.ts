import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeEmulateComponent } from './ve-emulate.component';

describe('VeEmulateComponent', () => {
  let component: VeEmulateComponent;
  let fixture: ComponentFixture<VeEmulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeEmulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeEmulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
