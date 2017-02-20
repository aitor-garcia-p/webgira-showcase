import { Component, OnInit } from '@angular/core';

import { ApiService } from '../shared/api.service';

import {AnalysisResponse, Token }from '../model/analysis-response';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private result: AnalysisResponse;

  constructor(private apiService: ApiService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  sendAnalysis(text: string) {
    console.log('sending to analyze: ' + text);
    this.apiService.analyze(text).subscribe(res => this.result = res);
  }

  getTokenColor(token: Token): string {
    if (token.polarityValue.value > 0) {
      return 'green';
    } else if (token.polarityValue.value < 0) {
      return 'red';
    } else {
      return 'grey';
    }
  }

  getTokenDecoration(token: Token): string {
    if (token.negated) {
      return 'overline';
    } else {
      return 'underline';
    }
  }

}
