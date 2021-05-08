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
/*  data: any; */
/*  countries: Object; */
 // sharedcountries = this.countries;

constructor(private http: HttpClient) { }

/* getData(inputValue: string){
  return this.http
             .get("https://restcountries.eu/rest/v2/name/"+ {inputValue})
             }
}
 */
getCountries(inputvalue: string):any {
  return this.http.get<any>('https://restcountries.eu/rest/v2/name/' + inputvalue)
/*   .subscribe(response => {
      console.log(response);
      this.countries = response[0];
      console.log(this.countries);
      this.data = response as string [];
    }
  ); */
}

getCurrency(inputvalue: string):any {
  return this.http.get<any>('https://restcountries.eu/rest/v2/currency/' + inputvalue)
/*   .subscribe(response => {
      console.log(response);
      this.data=Response;
      console.log(this.data);
      return response;
    }
  ); */
}
}

