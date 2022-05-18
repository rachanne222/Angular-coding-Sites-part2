import { Component, OnInit } from '@angular/core';
import { CodeSiteService } from '../code-site.service';
import { CodeSite } from '../code-sites/code-site'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  codesites?:CodeSite[]

  constructor(private codeSiteService: CodeSiteService) { 
  }
  getCodeSites():void{
    this.codeSiteService.getCodeSites()
    .subscribe(codeSites=>this.codesites=codeSites);
     }

  ngOnInit(): void {this.getCodeSites()
  }

}
