import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormdataService } from '../../services/formdata.service';

import { NavSteps } from '../../interfaces/NavStepsInterface';
import { IaddOnsData, InfoData, IplanData, IstepItems } from '../../interfaces/FormDataInterfaces';

import { InfoFormComponent } from "../info-form/info-form.component";
import { PlanFormComponent } from "../plan-form/plan-form.component";
import { ButtonComponent } from "../button/button.component";
import { AddOnsFormComponent } from "../add-ons-form/add-ons-form.component";
import { SummaryFormComponent } from "../summary-form/summary-form.component";

@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css',
    imports: [InfoFormComponent, PlanFormComponent, ButtonComponent, ReactiveFormsModule, AddOnsFormComponent, SummaryFormComponent]
})
export class MainPageComponent {

  steps: NavSteps[] = [
    {
      id: 1,
      title: 'Your Info'
    },
    {
      id: 2,
      title: 'Select Plan'
    },
    {
      id: 3,
      title: 'Add-ons'
    },
    {
      id: 4,
      title: 'Summary'
    }
  ]


  currentStep: number = 1;
  btnText: string[] = ['Next Step', 'Go Back', 'Confirm']
  data: IstepItems[] = [];
  form: Array<FormGroup> = [];
  currentFormData: (IplanData | IaddOnsData | InfoData | [])[] = [];
  currentFormFields: string[][] = [];
  

  constructor(private _formBuilder: FormBuilder, private _formData: FormdataService) { }

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData(): void {
    this.data = this._formData.getFormData();
    this.data.forEach((dataItem, i) => {
      this.currentFormData.push(this.data[i]['data']);
      this.currentFormFields.push(Object.keys(this.currentFormData[i]))
      this.form.push(this.buildForm(this.currentFormData[i]))
    })
  }

  buildForm(currentFormContent: IplanData | IaddOnsData | InfoData | []): FormGroup {
    const formControls: { [key: string]: any } = {};

    if (Array.isArray(currentFormContent)) {
      return this._formBuilder.group({});
    }

    Object.keys(currentFormContent).forEach(key => {
      formControls[key] = ["", Validators.required];
    });

    return this._formBuilder.group(formControls);
  }






  // this.form = this.createFormGroup(data.fields);

  // handleButtonClick(direction: 'next' | 'prev') {
  //   if (direction === 'next') {
  //     this.currentStep += 1;
  //   } else {
  //     this.currentStep -= 1;
  //   }
  // }


  // onSubmit() {
  //   console.log('Form values submitted')
  // }
}
