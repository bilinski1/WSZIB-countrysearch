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

  countries: any;
  data: any;

  inputvalue: string = this.country.value;

  ngOnInit() {}

  getCountry() {
    this.http.getCurrency(this.country.value).subscribe((response) => {
      this.countries = response[0];
      console.log(this.countries);
      this.data = response as string[];
    });

    this.http.getCountries(this.country.value).subscribe((response) => {
      this.countries = response[0];
      console.log(this.countries);
      this.data = response as string[];
    });
    
    this.http.getCapital(this.country.value).subscribe((response) => {
      this.countries = response[0];
      console.log(this.countries);
      this.data = response as string[];
    });
  }
}
