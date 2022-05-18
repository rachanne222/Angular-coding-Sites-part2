import { Injectable } from '@angular/core';
import { CodeSite } from './code-sites/code-site';
import { SITES } from './code-sites/codeSiteList'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeSiteService {
  getCodeSites(): Observable<CodeSite[]> {
    return of(SITES);
  }
 
  


  constructor() { }
}
