import { Component, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-nav-page',
  standalone: true,
  imports: [],
  templateUrl: './nav-page.component.html',
  styleUrl: './nav-page.component.css'
})
export class NavPageComponent {
  @Input() steps!: string[];
  

  currentStep!: number;

  constructor(private sharedService: SharedService) {
    this.sharedService.currentStep$.subscribe(step => {
      this.currentStep = step;
    });
  }
}
