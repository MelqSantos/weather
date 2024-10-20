import { Component, OnInit } from '@angular/core';
import { ComponentService } from './component.service';
import { ApiResponse } from 'src/model/ApiResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'weather';

  time: ApiResponse;

  constructor(private service: ComponentService){}

  ngOnInit(): void {
    this.service.getWeatherData().subscribe((resp: ApiResponse) => {
      this.time = resp;
    });
  }

  public round(numb: number): number{
    return Math.round(numb);
  }
  
}
