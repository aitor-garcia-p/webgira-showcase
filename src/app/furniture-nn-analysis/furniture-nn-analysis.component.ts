import { Component, OnInit } from '@angular/core';
import { Subject }           from 'rxjs/Subject';
import { Observable }        from 'rxjs/Observable';


import { ApiService } from '../shared/api.service';

import {NNAnalysisResponse, TokenInfo}from '../model/nn-analysis-response';

@Component({
  selector: 'my-furniture-nn-analysis',
  templateUrl: './furniture-nn-analysis.component.html',
  styleUrls: ['./furniture-nn-analysis.component.scss']
})
export class FurnitureNnAnalysisComponent implements OnInit {

  private textToAnalyze: string = "la comida estaba buena";
  private nnResults: string[];

private currentTextSubject = new Subject<string>();
private nnResultObservable:Observable<string[]>;

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
        ?   this.apiService.analyzeByFurnitureNN(encodeURIComponent(this.textToAnalyze))
        // or the observable of empty heroes if no search term
        : Observable.of<string>())
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<string>();
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

  chooseColor(result:string){
    if(result.indexOf('OTHER')>=0){
      return 'grey';
    }else {
      return 'black';
    }
  }

  analyzeByNN() {
    console.log("Analysis click");
    this.apiService.analyzeByFurnitureNN(encodeURIComponent(this.textToAnalyze)).subscribe(r => this.nnResults = r);
  }

}
