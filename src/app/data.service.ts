import { Injectable } from '@angular/core';
import { AppComponent } from './app.component'
import { Component, OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class Dataservice {

constructor(private http: HttpClient) { }

getCountries(inputvalue: string):any {
  return this.http.get<any>('https://restcountries.eu/rest/v2/name/' + inputvalue)
}

getCurrency(inputvalue: string):any {
  return this.http.get<any>('https://restcountries.eu/rest/v2/currency/' + inputvalue)
}

getCapital(inputvalue: string):any {
  return this.http.get<any>('https://restcountries.eu/rest/v2/capital/' + inputvalue)
}
}

