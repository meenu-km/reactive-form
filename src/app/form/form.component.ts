import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder, FormArray } from '@angular/forms';


function ageValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (isNaN(value) || value < 10 || value > 50) {
    return { invalidAge: true };
  }

  return null;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    middleName: new FormControl('',[Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  age: new FormControl('',[Validators.required, ageValidator]),
  gender: new FormControl('', Validators.required),
  address: new FormGroup({
    street: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    landmark: new FormControl('', [Validators.maxLength(20)]),
    city: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    state: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    zip: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    country: new FormControl('',[Validators.required, Validators.maxLength(20)]),
    }),
    hobbies: this.formBuilder.array([this.formBuilder.control('')]),
  });
  get firstName() {
    return this.profileForm.get('firstName');
  }
  get middleName() {
    return this.profileForm.get('middleName');
  }
  get lastName() {
    return this.profileForm.get('lastName');
  }
  get age() {
    return this.profileForm.get('age');
  }
  get gender() {
    return this.profileForm.get('gender');
  }
  get street() {
    return this.profileForm.get('address.street');
  }

  get landmark() {
    return this.profileForm.get('address.landmark');
  }

  get city() {
    return this.profileForm.get('address.city');
  }

  get state() {
    return this.profileForm.get('address.state');
  }

  get zip() {
    return this.profileForm.get('address.zip');
  }

  get country() {
    return this.profileForm.get('address.country');
  }
  get hobbies() {
    return this.profileForm.get('hobbies') as FormArray;
  }
  addHobbies() {
    this.hobbies.push(this.formBuilder.control(''));
  }
  
}
