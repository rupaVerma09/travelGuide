import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  countries=[];
  selectedCountry:any="";
  countryDetails:any = {};
  isSafe:boolean=false;

  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    this.getListCountries();
  }
  getListCountries(){
    var url ='https://covid2019-api.herokuapp.com/countries'

    this.http.get(url).subscribe(data =>{
    this.countries = data['countries']; 
  })

    
  }
  searchCountry(){
    var url ='https://covid2019-api.herokuapp.com/v2/country/' + this.selectedCountry;

    this.http.get(url).subscribe(data =>{
      this.countryDetails = data['data'];
      this.isSafe = ((this.countryDetails.recovered/this.countryDetails.confirmed)*100)>=90 ? true:false;
      console.log(this.isSafe)
    })
    
  }

}
