import { Component, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ButtonComponent } from "../button/button.component";

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

  constructor(private sharedService: SharedService) {
    this.sharedService.currentStep$.subscribe(step => {
      this.currentStep = step;
    });
  }

  handleButtonClick(direction: 'next' | 'prev') {
    if (direction === 'next') {
      this.sharedService.incrementCurrentStep();
    } else {
      this.sharedService.decrementCurrentStep();
    }
  }

}
