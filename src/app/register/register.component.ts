import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  private headers = new HttpHeaders({'Content-Type': 'application/json'});  
  submitForm(): void {
    // tslint:disable-next-line: variable-name
    const _that = this;
    console.log(this.registerForm);
    const url = "http://127.0.0.1:7001/login";
    this.http.post(url,
      JSON.stringify({
        "username": _that.registerForm.controls.username.value,
        "password": _that.registerForm.controls.password.value,
        "phone_number": _that.registerForm.controls.phoneNumber.value }),
        {headers: _that.headers}).subscribe(function (data) {
          console.log(data)
        },function (err) {
          console.log(err);
        });
    // tslint:disable-next-line: forin
    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.registerForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }
}
