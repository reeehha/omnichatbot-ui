import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogIntro } from './blog-intro';

describe('BlogIntro', () => {
  let component: BlogIntro;
  let fixture: ComponentFixture<BlogIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
