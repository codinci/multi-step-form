import { Injectable } from '@angular/core';
import { FormData } from '../data/formData';
import { IstepItems } from '../interfaces/FormDataInterfaces';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  constructor() { }

  getFormData(): IstepItems[] {
    return FormData;
  }
}
