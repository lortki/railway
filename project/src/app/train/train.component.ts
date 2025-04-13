import { Component, Input } from '@angular/core';
import {Train} from '../../models/train';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-train',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './train.component.html',
  styleUrl: './train.component.scss'
})

export class TrainComponent {
  @Input() train ?: Train;

  buyMsg = "Buy Ticket"
}
