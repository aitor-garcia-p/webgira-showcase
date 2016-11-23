import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api.service';

import {NNAnalysisResponse, TokenInfo}from '../model/nn-analysis-response';

@Component({
  selector: 'my-nn-analysis',
  templateUrl: './nn-analysis.component.html',
  styleUrls: ['./nn-analysis.component.scss']
})
export class NnAnalysisComponent implements OnInit {

  private textToAnalyze: string = "la comida estaba buena";
  private nnResult: NNAnalysisResponse;

  constructor(private apiService: ApiService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello nn-analysis');
  }

  getTokenStyle(tokenInfo: TokenInfo): string {

    // console.log(">>>>>>>>>>>" + JSON.stringify(tokenInfo));
    if (tokenInfo.aspectTerm || tokenInfo.entity!=='N' || tokenInfo.attribute!=='N' || tokenInfo.polarity!=='N'){
      return 'blue';
    } else {
      return 'black';
    }

  }

  analyzeByNN() {
    console.log("Analysis click");
    this.apiService.analyzeByNN(this.textToAnalyze).subscribe(r => this.nnResult = r);
  }

}
