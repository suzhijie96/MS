import { LoginService } from './../login/login.service';
import { RegisterService } from './register.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
  verifyCode: SafeHtml = '';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  // 构造函数
  constructor(private fb: FormBuilder,
              private http: HttpClient,
              public registerService: RegisterService,
              private loginService: LoginService,
              private doms: DomSanitizer) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      verify: [null, [Validators.required]]
    });
    this.getVerifyCode();
  }


  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity();
    }
    if (this.registerForm.valid) {
        console.log(this.registerForm.value);
        this.registerService.register(this.registerForm.value).subscribe((res) => {
          console.log(res);
          // switch (res.status)
        }, (err) => {
          console.log(err);
        });
    }
    // tslint:disable-next-line: variable-name
    // const url = 'http://127.0.0.1:7001/register';
    // this.http.post(url,
    //   JSON.stringify({
    //     'username': this.registerForm.controls.username.value,
    //     'password': this.registerForm.controls.password.value }),
    //     {headers: this.headers}).subscribe((data) => {
    //       console.log(data);
    //     }, (err) => {
    //       console.log(err);
    //     });



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

  getVerifyCode(): void {
    this.loginService.getVerifyCode().subscribe(res => {
      this.verifyCode = this.doms.bypassSecurityTrustHtml(res);
    });
  }
}
