import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiPipe } from './pipes/multi.pipe'
import { BuildInsComponent } from './build-ins.component';

import { SourceLinkServiceService } from '../../services/source-link-service.service';


describe('BuildInsComponent', () => {
  let component: BuildInsComponent;
  let fixture: ComponentFixture<BuildInsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildInsComponent, MultiPipe],
      providers: [SourceLinkServiceService]
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
