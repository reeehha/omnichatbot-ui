import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogStepWithImage } from './blog-step-with-image';

describe('BlogStepWithImage', () => {
  let component: BlogStepWithImage;
  let fixture: ComponentFixture<BlogStepWithImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogStepWithImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogStepWithImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
