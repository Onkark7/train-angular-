import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient ,
               
  ) { }




   apiBase="http://localhost:8083/"
  postData(url:any , payload :any):Observable<any>{

    return this.http.post<any>(this.apiBase+url,payload)

  }
  getData(url:any):Observable<any>{
    return this.http.get<any>(this.apiBase+url);
  }
}
