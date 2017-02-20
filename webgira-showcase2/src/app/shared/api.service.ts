import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AnalysisResponse} from '../model/analysis-response';
import {NNAnalysisResponse} from '../model/nn-analysis-response';

@Injectable()
export class ApiService {
  title = 'Angular 2';

  // private headers = new Headers({ 'Content-Type': 'application/json' });
  private headersUrlEncoded = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

  private HOST = 'http://localhost:8082';

  private HOST_NN = 'http://localhost:8091';

  private analysisUrl = this.HOST + '/webgira/absa';
  private multiwordsUrl = this.HOST + '/webgira/config/{lang}/multiwords';
  private negationsUrl = this.HOST + '/webgira/config/{lang}/negations';
  private polaritiesUrl = this.HOST + '/webgira/config/{lang}/sentiments';
  private topicsUrl = this.HOST + '/webgira/config/{lang}/topics';

  private nnAnalysisUrl = this.HOST_NN + '/nn-demos/annotate';
  private furnitureNnAnalysisUrl = this.HOST_NN + '/furniture-nn-demos/annotate';
  private generalNNAnalysis = this.HOST_NN + '/general-nn-demos/annotate';
  private nnAnalysisUrlFurniture = this.HOST_NN + '/nn-demos/annotate-furniture';

  constructor(private http: Http) { }

  analyze(text: string): Observable<AnalysisResponse> {
    return this.http
      .post(this.analysisUrl, `text=${text}`, { headers: this.headersUrlEncoded })
      .map((r: Response) => r.json() as AnalysisResponse);
  }

  getConfiguredMultiwords(lang: string): Observable<string[]> {
    return this.http.get(this.multiwordsUrl.replace('{lang}', lang)).map((r: Response) => r.json() as string[]);
  }

  getConfiguredNegations(lang: string): Observable<string[]> {
    return this.http.get(this.negationsUrl.replace('{lang}', lang)).map((r: Response) => r.json() as string[]);
  }

  getConfiguredPolarities(lang: string): Observable<any[]> {
    return this.http.get(this.polaritiesUrl.replace('{lang}', lang)).map((r: Response) => r.json() as any[]);
  }

  getConfiguredTopics(lang: string): Observable<any[]> {
    return this.http.get(this.topicsUrl.replace('{lang}', lang)).map((r: Response) => r.json() as any[]);
  }

  analyzeByNN(text: string): Observable<NNAnalysisResponse[]> {
    return this.http.get(this.nnAnalysisUrl + '?text=' + text).map((r: Response) => r.json() as NNAnalysisResponse[]);
  }

  analyzeByFurnitureNN(text: string): Observable<string[]> {
    return this.http.get(this.furnitureNnAnalysisUrl + '?text=' + text).map((r: Response) => r.json() as string[]);
  }

  // this is for the restaurants OTE, but hopefully will become general
  analyzeByGeneralNNAnalysis(text: string): Observable<string[]> {
    return this.http.get(this.generalNNAnalysis + '?text=' + text).map((r: Response) => r.json() as string[]);
  }

  analyzeByNNFurniture(text: string): Observable<NNAnalysisResponse[]> {
    return this.http.get(this.nnAnalysisUrlFurniture + '?text=' + text).map((r: Response) => r.json() as NNAnalysisResponse[]);
  }

}
