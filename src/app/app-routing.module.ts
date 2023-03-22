import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'weather-dashboard',component:WeatherDashboardComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
