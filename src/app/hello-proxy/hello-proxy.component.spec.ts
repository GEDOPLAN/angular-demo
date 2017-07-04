import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { HelloProxyComponent } from './hello-proxy.component';
import { SourceLinkServiceService } from '../services/source-link-service.service';

describe('HelloProxyComponent', () => {
  let component: HelloProxyComponent;
  let fixture: ComponentFixture<HelloProxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloProxyComponent ],
      imports: [HttpModule],
      providers: [SourceLinkServiceService]
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
