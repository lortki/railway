import { Component } from '@angular/core';
import { RailwayService } from '../../services/railway.service';
import {Observable} from 'rxjs';
import {FilterComponent} from '../filter/filter.component';
import {Train} from '../../models/train';
import {TrainComponent} from '../train/train.component';
import {CommonModule} from '@angular/common';
import {TrainsComponent} from '../trains/trains.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterComponent, TrainComponent, TrainsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {

  constructor(private railway : RailwayService){}

  stations ?: Observable<any>;

  trains : Train[] = []

  fromMsg = "საიდან"
  whereMsg = "სად"

  trainPerPage = 10
  page = 1

  ngOnInit(){
    this.railway.getStations().subscribe(data => {
      this.stations = data;
    })

    this.railway.getTrains().subscribe(data => {
      this.trains = data;
    })
  }
}
