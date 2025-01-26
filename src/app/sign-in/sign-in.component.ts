import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UtlitiesService } from '../services/utlities.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
data: any=[];
  

constructor(public api:ApiService,
            public sec:UtlitiesService
)
{

}

 submit(){

  let url="auth/users/login";
  const payload = {

    "username":this.data.username,
    "password":this.data.password
  }

  this.api.postData(url,payload).subscribe((res:any)=>{

        this.sec.jwtToken=res.jwt;
        this.sec.userType=res.role;

  });
 
}
}
