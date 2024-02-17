import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsFormComponent } from './add-ons-form.component';

describe('AddOnsFormComponent', () => {
  let component: AddOnsFormComponent;
  let fixture: ComponentFixture<AddOnsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOnsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOnsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
