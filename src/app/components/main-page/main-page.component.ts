import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


import { InfoFormComponent } from "../info-form/info-form.component";
import { PlanFormComponent } from "../plan-form/plan-form.component";
import { ButtonComponent } from "../button/button.component";
import { NavSteps } from '../../interfaces/nav-steps';
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
  userData = new FormGroup({
    name: new FormControl('')
  });

  Next: string = "Next";
  Previous: string ="Previous";
  Submit: string = "Submit";

  handleButtonClick(direction: 'next' | 'prev') {
    if (direction === 'next') {
      this.currentStep += 1;
    } else {
      this.currentStep -= 1;
    }
  }


  onSubmit() {
    console.log('Form values submitted')
  }

}
