import { Component, OnInit } from '@angular/core';

/* export class Countries {
  constructor(
    public id: number,
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
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
