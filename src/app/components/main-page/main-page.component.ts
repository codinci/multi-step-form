import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormdataService } from '../../services/formdata.service';

import { IaddOnsData, InfoData, IplanData, IstepItems } from '../../interfaces/FormDataInterfaces';



@Component({
    selector: 'app-main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.css',
    imports: []
})
export class MainPageComponent {

  btnText: string[] = ['Next Step', 'Go Back', 'Confirm']
  data: IstepItems[] = [];
  form: Array<FormGroup> = [];
  currentFormData: (IplanData | IaddOnsData | InfoData | [])[] = [];
  formLabels: string[][] = [];
  formForValues: string[][] = [];
  fieldTypes: any = [];
  placeHolders: any = [];


  constructor(private _formBuilder: FormBuilder, private _formData: FormdataService) { }

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData(): void {
    this.data = this._formData.getFormData();
    // this.data.forEach((dataItem, i) => {
    //   this.currentFormData.push(this.data[i]['data']);
    //   this.form.push(this.buildForm(this.currentFormData[i]))
    // })
  }

  // getFormLabels(): void {
  //   this.currentFormData.forEach((dataItem, i) => {
  //     if ('label' in dataItem) {
  //       this.formLabels.push(dataItem.label)
  //       this.formForValues.push(dataItem.for)
  //       this.fieldTypes.push(dataItem.type)
  //     }
  //   });
  // }

  // getplaceHolders(): void {
  //   this.currentFormData.forEach((dataItem, i) => {
  //     if ('placeholder' in dataItem) {
  //       this.placeHolders.push(dataItem.placeholder)
  //     }
  //   });
  // }



  // buildForm(currentFormContent: IplanData | IaddOnsData | InfoData | []): FormGroup {
  //   const formControls: { [key: string]: any } = {};

  //   if (Array.isArray(currentFormContent)) {
  //     return this._formBuilder.group({});
  //   }

  //   Object.keys(currentFormContent).forEach(key => {
  //     formControls[key] = ["", Validators.required];
  //   });

  //   return this._formBuilder.group(formControls);
  // }






  // this.form = this.createFormGroup(data.fields);

  // handleButtonClick(direction: 'next' | 'prev') {
  //   if (direction === 'next') {
  //     this.currentStep += 1;
  //   } else {
  //     this.currentStep -= 1;
  //   }
}


  // onSubmit() {
  //   console.log('Form values submitted')
  // }

