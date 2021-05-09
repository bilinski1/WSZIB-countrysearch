import { Component, Input, OnInit } from '@angular/core';


/* export class Countries {
  constructor(
    public id: number,fg
    public name: string,
    public subregion: string,
    public capital: string,
    public population: number,
    public flag: string
  ) {
  }
} */



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})
export class CountryComponent implements OnInit {
  
  countries: any
  data: any;
  constructor() { }


  ngOnInit(): void {
  }

}
