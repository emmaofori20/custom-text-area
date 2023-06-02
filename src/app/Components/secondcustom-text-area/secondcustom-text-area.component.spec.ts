import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcustomTextAreaComponent } from './secondcustom-text-area.component';

describe('SecondcustomTextAreaComponent', () => {
  let component: SecondcustomTextAreaComponent;
  let fixture: ComponentFixture<SecondcustomTextAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondcustomTextAreaComponent]
    });
    fixture = TestBed.createComponent(SecondcustomTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
