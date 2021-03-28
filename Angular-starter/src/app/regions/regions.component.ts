import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiCommService} from "../services/api-comm.service";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  responseData: any;
  regionsDta = {"region":"", "code": "", "token": localStorage.getItem('token')}
  tokenData = {"token": localStorage.getItem('token')}

  constructor(private router: Router, private apiExternal: ApiCommService) {
    this.getRegions();
  }

  ngOnInit(): void {
  }

  regions: any;

  addRegion(){
   this.apiExternal.postData(this.regionsDta, 'add_region/').subscribe((response: any) =>{
     this.responseData = response
     this.getRegions()
   })
  }

  getRegions(){
    this.apiExternal.postData(this.tokenData, 'get_regions/').subscribe((data: any) => {
      this.regions = data.regions
    })
  }

}
