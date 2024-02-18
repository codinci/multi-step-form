import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
    selector: 'app-info-form',
    standalone: true,
    templateUrl: './info-form.component.html',
    styleUrl: './info-form.component.css',
    imports: [ReactiveFormsModule],
})
export class InfoFormComponent {
  @Input() personalInfoForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNo: new FormControl(''),

  });
}
