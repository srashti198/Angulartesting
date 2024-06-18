import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  employeeList:any;
  constructor(private testService: TestService){
  }
  
  getPhoneNumber( list:any){
    if(list.cellPhone){
      if(list.cellPhone.toString().length==10){
        return list.cellPhone ;
      }else{
        alert('invalid callPhone number')
      } 
    }else if(list.workPhone){
      return list.workPhone ;
    }else if(list.landline){
      return list.landline;
    }else{
      this.testService.getEmployee().subscribe((result)=>{
        this.employeeList=result;
        console.log(this.employeeList);
      });
    }
    
   }
}
