import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Client, WeatherForecast } from '../api.generated.clients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public forecastData?: WeatherForecastData[];
  public forecasts: WeatherForecast[] = [];

  constructor(http: HttpClient,
    weatherClient: Client) {
    // http.get<WeatherForecastData[]>('/weatherforecast').subscribe(result => {
    //   this.forecastData = result;
    // }, error => console.error(error));

    weatherClient.weatherForecast().subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error))

  }

  title = 'OCR_UI';
}

// interface WeatherForecastData {
//   date: string;
//   temperatureC: number;
//   temperatureF: number;
//   summary: string;
// }
