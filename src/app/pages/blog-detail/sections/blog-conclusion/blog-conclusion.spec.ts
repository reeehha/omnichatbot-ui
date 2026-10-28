import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogConclusion } from './blog-conclusion';

describe('BlogConclusion', () => {
  let component: BlogConclusion;
  let fixture: ComponentFixture<BlogConclusion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogConclusion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogConclusion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
