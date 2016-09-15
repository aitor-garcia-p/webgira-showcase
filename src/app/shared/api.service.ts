import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';

import { Observable }        from 'rxjs/Observable';

import {AnalysisResponse} from "../model/analysis-response";

@Injectable()
export class ApiService {
  title = 'Angular 2';

private headers = new Headers({ 'Content-Type': 'application/json' });
private headersUrlEncoded= new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

private analysisUrl="http://localhost:8082/webgira/absa";

constructor(private http: Http) { }

  analyze(text:string):Observable<AnalysisResponse>{
    return this.http
    .post(this.analysisUrl,`text=${text}`,{ headers: this.headersUrlEncoded })
    .map((r: Response) => r.json() as AnalysisResponse);
  }

}
