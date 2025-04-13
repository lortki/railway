import { Component, Input } from '@angular/core';
import {RailwayService} from '../../services/railway.service';
import {Train} from '../../models/train';
import {CommonModule} from '@angular/common';
import { TrainComponent } from "../train/train.component";

@Component({
    selector: 'app-trains',
    standalone: true,
    templateUrl: './trains.component.html',
    styleUrl: './trains.component.scss',
    imports: [CommonModule, TrainsComponent, TrainComponent]
})

export class TrainsComponent {

  @Input() filter_from ?: string;
  @Input() filter_to ?: string;

  constructor(private railway : RailwayService){}

  trainPerPage = 10
  page = 1

  trains : Train[] = []

  ngOnInit(){
    this.railway.getTrains().subscribe(data => {
      this.trains = data;
    })
  }
}
