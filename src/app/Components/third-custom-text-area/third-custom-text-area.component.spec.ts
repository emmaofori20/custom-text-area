import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCustomTextAreaComponent } from './third-custom-text-area.component';

describe('ThirdCustomTextAreaComponent', () => {
  let component: ThirdCustomTextAreaComponent;
  let fixture: ComponentFixture<ThirdCustomTextAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdCustomTextAreaComponent]
    });
    fixture = TestBed.createComponent(ThirdCustomTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
