import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
validateForm: FormGroup;
isVisible = false;

showModal(): void {
  this.isVisible = true;
}

submitForm(value: { userName: string; password: string; confirm: string; }): void {
  // tslint:disable-next-line: forin
  for (const key in this.validateForm.controls) {
    this.validateForm.controls[key].markAsDirty();
    this.validateForm.controls[key].updateValueAndValidity();
  }
  console.log(value);

}

constructor(private fb: FormBuilder) { }

confirmValidator = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value) {
    return { error: true, required: true };
  } else if (control.value !== this.validateForm.controls.password.value) {
    return { confirm: true, error: true };
  }
  return {};
}

resetForm(e: MouseEvent): void {
  e.preventDefault();
  this.validateForm.reset();
  // tslint:disable-next-line: forin
  for (const key in this.validateForm.controls) {
    this.validateForm.controls[key].markAsPristine();
    this.validateForm.controls[key].updateValueAndValidity();
  }}

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [ this.confirmValidator]]
    });
  }

}
