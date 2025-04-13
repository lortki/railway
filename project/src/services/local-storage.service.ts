import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor() { }

  set(key : string, value : string){
    localStorage.setItem(key, value)
  }

  get(key : string) : any{
    return localStorage.getItem(key)
  }

  remove(key : string){
    localStorage.removeItem(key)
  }

  removeAll(){
    localStorage.clear()
  }

}
