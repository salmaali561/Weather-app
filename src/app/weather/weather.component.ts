import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weather: any = null;  

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      (data: any) => {
        this.weather = data;
      },
      (error: any) => {
        console.error('Error fetching weather data', error);
      }
    );
  }
}
   