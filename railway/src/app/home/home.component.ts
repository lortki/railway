import { Component } from '@angular/core';
import { RailwayService } from '../../services/railway.service';
import {Observable} from 'rxjs';
import {FilterComponent} from '../filter/filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private railway : RailwayService){}

  stations ?: Observable<any>;

  fromMsg = "საიდან"
  whereMsg = "სად"

  ngOnInit(){
    this.railway.getStations().subscribe(data => {
      this.stations = data;
      console.log(this.stations)
    })
  }
}
