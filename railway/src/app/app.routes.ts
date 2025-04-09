import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ErrorComponent} from './error/error.component';

export const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},

  {path: "home", component: HomeComponent},

  // {path: "home", loadChildren: () => import("./home/home.component").then(m => m.HomeComponent)},

  {path: "**", component: ErrorComponent}
];
