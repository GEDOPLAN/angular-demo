import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TestingComponent } from './testing.component';
import { SourceLinkServiceService } from '../../services/source-link-service.service';

import { HttpService } from './services/http.service';
import { CalculateService } from './services/calculate.service';
import { HttpServiceMock } from './services/http-mock.service';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestingComponent],
      providers: [
        CalculateService,
        SourceLinkServiceService
      ]
    })
      .overrideComponent(TestingComponent, {
        set: {
          providers: [
            { provide: HttpService, useClass: HttpServiceMock }
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show welcome text', () => {
    const welcomeText = fixture.nativeElement.querySelector('p').innerHTML;
    expect(welcomeText.trim()).toEqual('testing works!');
  });

  it('should load users', () => {
    expect(component).toBeTruthy();
    const users: any[] = (<any>component).users;

    expect(users.length).toBe(2);
    expect(users[0].username).toBe('Bret-mocked');
  });

  it('should add 10 multiple times', () => {
    expect(component).toBeTruthy();
    component.add10();
    component.add10();
    component.add10();

    expect(component.resultNumber).toBe(30);
  });

  it('spie on add 10 method', () => {
    expect(component).toBeTruthy();
    let calcService = TestBed.get(CalculateService);
    const spyOnAdd10 = spyOn(calcService, 'addSomeValues');
    spyOnAdd10.and.callThrough();

    component.add10();
    component.add10();
    component.add10();

    expect(spyOnAdd10).toHaveBeenCalledTimes(3);
    expect(spyOnAdd10.calls.first().args).toEqual([0, 10]);
    expect(spyOnAdd10.calls.all()[1].args).toEqual([10, 10]);
    expect(spyOnAdd10.calls.all()[2].returnValue).toEqual(30);
  });
});
