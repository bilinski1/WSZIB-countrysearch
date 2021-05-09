import { Component, OnInit } from '@angular/core';
import { Dataservice } from './data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Dataservice],
})

/* interface Countries {
    id: number,
    name: string,
    subregion: string,
    capital: string,
    population: number,
    flag: string
}
 */
export class AppComponent implements OnInit {
  constructor(private http: Dataservice) {}

  public country = {
    value: '',
  };

  currency: any;
  languages: any;
  countries: any;
  data: any;

  inputvalue: string = this.country.value;

  ngOnInit() {}

  getCountry() {
    this.http.getCurrency(this.country.value).subscribe((response) => {
      this.countries = response[0];
      console.log(this.countries);
      this.languages = this.countries.languages[0];
      console.log(this.languages.name);
      this.currency = this.countries.currencies[0];
      console.log(this.currency.code);
      this.data = response as string[];
    });

    this.http.getCountries(this.country.value).subscribe((response) => {
      this.countries = response[0];
      console.log(this.countries);
      this.languages = this.countries.languages[0];
      console.log(this.languages.name);
      this.currency = this.countries.currencies[0];
      console.log(this.currency.code);
      this.data = response as string[];
    });

    this.http.getCapital(this.country.value).subscribe((response) => {
      this.countries = response[0];
      console.log(this.countries);
      this.languages = this.countries.languages[0];
      console.log(this.languages.name);
      this.currency = this.countries.currencies[0];
      console.log(this.currency.code);
      this.data = response as string[];
    });
  }
}
