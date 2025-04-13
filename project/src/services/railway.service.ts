import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RailwayService {

  constructor(private api : ApiService) { }

  startPoint = "https://railway.stepprojects.ge/api"

  // raylway global
  get(endPoint : string) : Observable<any>{
    return this.api.get(`${this.startPoint}/${endPoint}`);
  }
  getById(endPoint : string, id : number) : Observable<any>{
    return this.api.get(`${this.startPoint}/${endPoint}/${id}`);
  }

  // stations
  getStations() : Observable<any>{
    return this.get("stations");
  }
  getStation(id : number) : Observable<any>{
    return this.getById("stations", id)
  }

  // trains
  getTrains() : Observable<any>{
    return this.get("trains")
  }
  getTrain(id : number) : Observable<any>{
    return this.getById("trains", id)
  }

  // vagons
  getVagons() : Observable<any>{
    return this.get("vagons")
  }
  getVagon(id : number) : Observable<any>{
    return this.getById("vagons", id)
  }

  // departures
  getDepartures() : Observable<any>{
    return this.get("departures")
  }
  getDeparture(id : number) : Observable<any>{
    return this.getById("departures", id)
  }
}
