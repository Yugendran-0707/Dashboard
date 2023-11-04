import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private http:HttpClient) { }

  // private data: any;



  public ApiData(): Observable<any>{
    return this.http.get("https://1.api.fy23ey05.careers.ifelsecloud.com/")
  }
}
