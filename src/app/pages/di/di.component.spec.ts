import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiComponent } from './di.component';
import { ChildComponent } from './components/child/child.component';
import { demotoken, demotokenAlias, demotokenFactory, demotokenValue } from './di.component';
import { DemoService } from './components/demo.service';

describe('DiComponent', () => {
  let component: DiComponent;
  let fixture: ComponentFixture<DiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiComponent, ChildComponent],
      providers: [
        { provide: 'DEMO-TOKEN', useValue: 'Value from Root.' },
        { provide: DemoService, useClass: DemoService },
        { provide: demotoken, useClass: DemoService },
        { provide: demotokenFactory, useFactory: () => { return new DemoService() } },
        { provide: demotokenValue, useValue: 'test' },
        { provide: demotokenAlias, useExisting: DemoService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
