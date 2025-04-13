import {CommonModule} from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent {
  @Input() Stations : any;

  @Output() filter_from_event = new EventEmitter<string>;

  sent_filter_from(){
    this.filter_from_event.emit()
  }
}
