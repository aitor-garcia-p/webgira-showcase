import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api.service';

// import {AnalysisResponse, Token }from '../model/analysis-response';

@Component({
  selector: 'my-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.scss']
})
export class DictionariesComponent implements OnInit {

  // private msg="yes, this is";

  private multiwords = [];
  private negations = [];
  private polaritywords;
  private topics = [];

  private polaritywordsLoading: boolean;


  constructor(private apiService: ApiService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Dictionaries');
    this.apiService.getConfiguredMultiwords('es').subscribe(r => this.multiwords = r);
    this.apiService.getConfiguredNegations('es').subscribe(r => this.negations = r);
    this.apiService.getConfiguredTopics('es').subscribe(r => this.topics = r);
    this.polaritywordsLoading = true;
    this.apiService.getConfiguredPolarities('es').subscribe(r => this.loadPolarityWords(r));
  }

  loadPolarityWords(r: any[]) {
    this.polaritywords = r;
    this.polaritywordsLoading = false;
  }

}
