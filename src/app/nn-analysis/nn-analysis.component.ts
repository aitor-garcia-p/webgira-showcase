import { Component, OnInit } from '@angular/core';
import { Subject }           from 'rxjs/Subject';
import { Observable }        from 'rxjs/Observable';


import { ApiService } from '../shared/api.service';

import {NNAnalysisResponse, TokenInfo}from '../model/nn-analysis-response';

@Component({
  selector: 'my-nn-analysis',
  templateUrl: './nn-analysis.component.html',
  styleUrls: ['./nn-analysis.component.scss']
})
export class NnAnalysisComponent implements OnInit {

  private textToAnalyze: string = "la comida estaba buena";
  private nnResults: NNAnalysisResponse[];

private currentTextSubject = new Subject<string>();
private nnResultObservable:Observable<NNAnalysisResponse[]>;

  constructor(private apiService: ApiService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello nn-analysis');
    this.nnResultObservable = this.currentTextSubject
      .debounceTime(200)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(text => text   // switch to new observable each time
        // return the http search observable
        ?   this.apiService.analyzeByNN(encodeURIComponent(this.textToAnalyze))
        // or the observable of empty heroes if no search term
        : Observable.of<NNAnalysisResponse>())
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<NNAnalysisResponse>();
      });
      this.nnResultObservable.subscribe(r=>this.nnResults=r);
  }

  getTokenStyle(tokenInfo: TokenInfo): string {

    // console.log(">>>>>>>>>>>" + JSON.stringify(tokenInfo));
    if (tokenInfo.aspectTerm || tokenInfo.entity!=='N' || tokenInfo.attribute!=='N' || tokenInfo.polarity!=='N'){
      return 'blue';
    } else {
      return 'black';
    }

  }

  getEntityStyle(tokenInfo: TokenInfo): string {
    switch(tokenInfo.entity){
      case 'FOOD': return 'red';
      case 'SERVICE': return 'orange';
      case 'AMBIENCE': return 'purple';
      default: return 'silver';
    }
  }

  analyzeByNN() {
    console.log("Analysis click");
    this.apiService.analyzeByNN(encodeURIComponent(this.textToAnalyze)).subscribe(r => this.nnResults = r);
  }

}
