import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CodeSitesComponent } from './code-sites.component';

describe('CodeSitesComponent', () => {
  let component: CodeSitesComponent;
  let fixture: ComponentFixture<CodeSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
