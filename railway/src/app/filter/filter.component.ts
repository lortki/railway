import {CommonModule} from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent {
  @Input() Message ?: string;
  @Input() Stations : any;
}
