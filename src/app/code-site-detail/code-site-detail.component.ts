import { Component, OnInit, Input } from '@angular/core';
import { CodeSite } from '../code-sites/code-site';

@Component({
  selector: 'app-code-site-detail',
  templateUrl: './code-site-detail.component.html',
  styleUrls: ['./code-site-detail.component.css']
})
export class CodeSiteDetailComponent implements OnInit {
  

  @Input() codesite?: CodeSite;

  ngOnInit(): void {
  }

}
