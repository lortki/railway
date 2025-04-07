import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http : HttpClient) { }


  get(url : string) : Observable<any>{
    return this.http.get(url)
  }

  getById(url : string, id : number) : Observable<any>{
    return this.http.get(`${url}/${id}`)
  }

  post(url : string, postData : any) : Observable<any>{
    return this.http.post(url, postData)
  }

}
