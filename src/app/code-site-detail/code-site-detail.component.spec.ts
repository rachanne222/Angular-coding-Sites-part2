import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSiteDetailComponent } from './code-site-detail.component';

describe('CodeSiteDetailComponent', () => {
  let component: CodeSiteDetailComponent;
  let fixture: ComponentFixture<CodeSiteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeSiteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSiteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
