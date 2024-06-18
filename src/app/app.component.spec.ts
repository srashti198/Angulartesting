import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';



describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  // let httpClient: HttpClient;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [TestService]
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.componentInstance;
    //  httpClient = jasmine.createSpyObj("HttpClient", [ "get"]);
    fixture.detectChanges();
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
  fit('should test get employee',()=>{
    // const testService = TestBed.inject(TestService);
    const data = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    };
    // spyOn(testService, 'getEmployee').and.returnValue(of(data));
    app.getPhoneNumber({other:6578});
    // expect(testService.getEmployee).toHaveBeenCalled();
  });
});
