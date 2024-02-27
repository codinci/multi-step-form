import { Component, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ButtonComponent } from "../button/button.component";
import { IaddOnsData, InfoData, IplanData, IstepItems } from '../../interfaces/FormDataInterfaces';
import { FormBuilder } from '@angular/forms';
import { FormdataService } from '../../services/formdata.service';

@Component({
    selector: 'app-form-page',
    standalone: true,
    templateUrl: './form-page.component.html',
    styleUrl: './form-page.component.css',
    imports: [ButtonComponent]
})
export class FormPageComponent {
  @Input() steps!: string[]

  currentStep!: number;
  btnText: string[] = ['Next Step', 'Go Back', 'Confirm']
  data: IstepItems[] = [];
  currentFormData: any = [];
  formFields: string[][] = [];

  constructor
  (
    private sharedService: SharedService,
    private _formBuilder: FormBuilder,
    private _formData: FormdataService
  )
  {
    this.sharedService.currentStep$.subscribe(step => {
      this.currentStep = step;
    });
  }

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData(): void {
    this.data = this._formData.getFormData();
    this.data.forEach((dataItem, i) => {
      this.currentFormData.push(this.data[i]['data']);
      this.formFields.push(Object.keys(this.currentFormData[i]))
    })
    console.log((this.currentFormData[0] as InfoData).Email.type)
  }

  handleButtonClick(direction: 'next' | 'prev') {
    if (direction === 'next') {
      this.sharedService.incrementCurrentStep();
    } else {
      this.sharedService.decrementCurrentStep();
    }
  }

}
