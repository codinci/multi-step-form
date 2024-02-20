import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { NavPageComponent } from "./components/nav-page/nav-page.component";
import { FormPageComponent } from "./components/form-page/form-page.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MainPageComponent, NavPageComponent, FormPageComponent]
})
export class AppComponent {
  title = 'multi-step-form';
  steps: string[] = ['Your Info', 'Select Plan', 'Add-ons', 'Summary']
  currentStep: number = 0
}
