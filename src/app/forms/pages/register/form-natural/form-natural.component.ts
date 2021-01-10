import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-natural',
  templateUrl: './form-natural.component.html',
  styleUrls: ['./form-natural.component.css']
})
export class FormNaturalComponent implements OnInit {

  registerForm: any;
  phones: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', {validators: [Validators.required]}],
      lastname: ['', {validators: [Validators.required]}],
      idnumber: ['', {validators: [Validators.required]}],
      province: ['', {validators: [Validators.required]}],
      city: ['', {validators: [Validators.required]}],
      address: ['', {validators: [Validators.required]}],
      phone: [''],
      cellphone: [''],
      extratelephones: this.formBuilder.array([]),
      email: ['', {validators: [Validators.required]}],
      password: ['', {validators: [Validators.required, Validators.minLength(8)]}]
    });
  }

  get telephones(): FormArray {
    this.phones = this.registerForm.get('extratelephones') as FormArray;
    return this.registerForm.get('extratelephones') as FormArray;
  }

  onSubmit(): void {
    console.log(this.registerForm.getRawValue());
  }

  addExtraPhones(): void {
    const extraphones = this.formBuilder.group({
      phone: [''],
      cell: ['']
    });
    this.telephones.push(extraphones);
  }

}
