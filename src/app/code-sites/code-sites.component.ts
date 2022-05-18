import { Component, OnInit } from '@angular/core';
import { CodeSite } from './code-site';
import { CodeSiteService } from '../code-site.service';

@Component({
  selector: 'app-code-sites',
  templateUrl: './code-sites.component.html',
  styleUrls: ['./code-sites.component.css'],
})
export class CodeSitesComponent implements OnInit {
  selectedSite?: CodeSite;
  codeSites?:CodeSite[]

  constructor(private codeSiteService: CodeSiteService) { 

 

  }
  getCodeSites():void{
    this.codeSiteService.getCodeSites()
    .subscribe(codeSites=>this.codeSites=codeSites);
     }

 
  ngOnInit(): void {this.getCodeSites()
  }
  
  onSelect(codesite: CodeSite): void {
    this.selectedSite = codesite;
  }
 
}
