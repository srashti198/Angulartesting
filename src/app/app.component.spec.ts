import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let testService: jasmine.SpyObj<TestService>;

  const mockTestService = jasmine.createSpyObj<TestService>(" testService", ['getEmployee'])
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [TestService,
        {
          provide: TestService,
          useValue: mockTestService
        },
      ]
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
    fixture.detectChanges();
    const data = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    };
    mockTestService.getEmployee.and.returnValue(of(data))
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should test get phonenumber method for case cellphone', ()=>{
    app.getPhoneNumber({cellPhone:7865348910});
  });

  it('should test get phonenumber method for case cellphone',()=>{
    app.getPhoneNumber({workPhone:9101655786});
  });

  it('should test get phonenumber method for case landline',()=>{
    app.getPhoneNumber({landline:8967855786});
  });

  it('should test get phonenumber method for invalid phonenumber',()=>{
    app.getPhoneNumber({cellPhone:67854});
  });
  
  it('should test get employee',()=>{
    app.getPhoneNumber({other:6578});
    expect(mockTestService.getEmployee).toHaveBeenCalled();
  });
});
