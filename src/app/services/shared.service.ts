import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  
  private currentStepSubject = new BehaviorSubject<number>(0);
  currentStep$: Observable<number> = this.currentStepSubject.asObservable();

  constructor() {}

  setCurrentStep(step: number): void {
    this.currentStepSubject.next(step);
  }

  incrementCurrentStep(): void {
    this.currentStepSubject.next(this.currentStepSubject.value + 1);
  }

  decrementCurrentStep(): void {
    this.currentStepSubject.next(this.currentStepSubject.value - 1);
  }
}
