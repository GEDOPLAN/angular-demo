import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloProxyComponent } from './hello-proxy.component';

describe('HelloProxyComponent', () => {
  let component: HelloProxyComponent;
  let fixture: ComponentFixture<HelloProxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloProxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloProxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
