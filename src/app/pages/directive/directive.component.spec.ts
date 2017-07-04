import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveComponent } from './directive.component';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

import {ColorfullHelloWorldDirective} from './directives/colorfull-hello-world.directive';
import {ErrorbuttonDirective} from './directives/errorbutton.directive';
import {LogDirective} from './directives/log.directive';

describe('DirectiveComponent', () => {
  let component: DirectiveComponent;
  let fixture: ComponentFixture<DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveComponent, ColorfullHelloWorldDirective, ErrorbuttonDirective, LogDirective],
      providers: [SourceLinkServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
