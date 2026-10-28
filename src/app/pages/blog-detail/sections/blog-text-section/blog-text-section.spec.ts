import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTextSection } from './blog-text-section';

describe('BlogTextSection', () => {
  let component: BlogTextSection;
  let fixture: ComponentFixture<BlogTextSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTextSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTextSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
