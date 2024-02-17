import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators  } from '@angular/forms';

@Component({
    selector: 'app-info-form',
    standalone: true,
    templateUrl: './info-form.component.html',
    styleUrl: './info-form.component.css',
    imports: [ReactiveFormsModule, CommonModule],
})
export class InfoFormComponent {

  personalInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.personalInfoForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
    });
  }
}
