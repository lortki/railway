import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RailwayService {

  constructor(private api : ApiService) { }

  startPoint = "https://railway.stepprojects.ge/api"

  get(endPoint : string) : Observable<any>{
    return this.api.get(`${this.startPoint}/${endPoint}`);
  }

  getStations() : Observable<any>{
    return this.get("stations");
  }

  getTrains() : Observable<any>{
    return this.get("trains")
  }

  getVagons() : Observable<any>{
    return this.get("vagons")
  }

  getDepartures() : Observable<any>{
    return this.get("departures")
  }
}
