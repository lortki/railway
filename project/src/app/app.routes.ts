import { Routes } from '@angular/router';
import {ErrorComponent} from './error/error.component';

export const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},

  {
    path: "home",
    title: "Railway Tickets",
    loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)
  },

  {
    path: "vagons/:id",
    title: "Vagons",
    loadComponent: () => import("./vagons/vagons.component").then(m => m.VagonsComponent)
  },

  {path: "**", component: ErrorComponent}
];
