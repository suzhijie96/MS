import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  verifyCode: SafeHtml = '';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(
    public router: Router,
    private fb: FormBuilder,
    private http: HttpClient,
    private loginService: LoginService,
    private doms: DomSanitizer
) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      verify: [null, [Validators.required]],
      remember: [true]
    });
    this.getVerifyCode();
  }

  submitForm(): void {
    // 页面跳转,传递用户名参数
    console.log('userName: ' + this.validateForm.controls.userName.value);
    console.log('password: ' + this.validateForm.controls.password.value);
    // const _that = this;
    // const url = "http://127.0.0.1:7001/login";
    // _that.http.post(url,
    //   JSON.stringify({
    //     "username": _that.registerForm.controls.username.value,
    //     "password": _that.registerForm.controls.password.value,
    //     "phone_number": _that.registerForm.controls.phoneNumber.value }),
    //     {headers: _that.headers}).subscribe(function (data) {
    //       console.log(data)
    //     },function (err) {
    //       console.log(err);
    //     // });

    if ( this.validateForm.valid ) {
      window.localStorage.setItem('loginInfo', JSON.stringify(this.validateForm.value ));
      this.router.navigate(['/Index', this.validateForm.controls.userName.value]);
    }
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  // 跳转到修改密码页面
  goToResetPwd() {
    this.router.navigate(['/resetPassword']);
  }

  getVerifyCode() {
    this.loginService.getVerifyCode().subscribe(res => {
      this.verifyCode = this.doms.bypassSecurityTrustHtml(res);
    });
  }


}
