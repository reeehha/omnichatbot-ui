import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTips } from './blog-tips';

describe('BlogTips', () => {
  let component: BlogTips;
  let fixture: ComponentFixture<BlogTips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
