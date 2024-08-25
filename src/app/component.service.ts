import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResponse } from 'src/model/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=rio de janeiro&lang=pt_br&appid=9b13af9e54a24db7d20c8198ccf1f4ea'; // Substitua pela URL da API

  getWeatherData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => {
        // Manipule a resposta se necessário
        return response;
      })
    );
  }
}
