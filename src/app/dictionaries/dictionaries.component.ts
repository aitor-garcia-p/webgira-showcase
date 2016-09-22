import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api.service';

import {AnalysisResponse,Token }from '../model/analysis-response';

@Component({
  selector: 'my-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.scss']
})
export class DictionariesComponent implements OnInit {

private result:AnalysisResponse;

private msg="yes, this is";

  constructor(private apiService:ApiService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Dictionaries');
  }

}