import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit{
  WeatherData:any;
  image_url:string="";
  value:String="";
  default_location:string="";

  constructor(private snackBar: MatSnackBar,private router: Router){}


  ngOnInit()
  {
    this.WeatherData = {
      main : {},
    };
    console.log(this.setWeatherData);
    this.default_location="madurai";
    this.getWeatherdata(this.default_location);
  }

  getWeatherdata(location:String)
  {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=183ab79b42defb53e22ea9d4a7dc3a0f')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
  }

  setWeatherData(data: any)
  {
    this.WeatherData=data;
    console.log(this.WeatherData);
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.weather_description =this.WeatherData.weather[0].description;
    this.WeatherData.icon=this.WeatherData.weather[0].icon;
    this.image_url='https://openweathermap.org/img/wn/'+this.WeatherData.icon+'@2x.png';
  }

  update_weather()
  {
    if(this.value == "")
    {
      this.snackBar.open("Enter a Location !", "OK",
    {
      duration:4000,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
    })
    }
    else
    {
      this.getWeatherdata(this.value);
    }
  }

  logout()
  {
    this.router.navigate(['/']);
    this.snackBar.open("Logout Successful !", "",
    {
      duration:4000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
       
    }) 
  }
}
