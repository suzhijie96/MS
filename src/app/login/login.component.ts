import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginInfo = {
  //   username: '',
  //   password: ''
  // };
  //   constructor() { }

  // ngOnInit(): void {
  // }

  // submit(loginInfo: any): void {
  //   alert(loginInfo.username + ',' + loginInfo.password);
  // }

  validateForm!: FormGroup;

  submitForm(): void {
    // tslint:disable-next-line: forin
    console.log("userName: " + this.validateForm.controls.userName.value);
    console.log("password: " + this.validateForm.controls.password.value);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  //跳转到修改密码页面
  GoToResetPwd() {
    let validate = this.validateForm.controls.userName;
    console.log(validate);
    this.router.navigate(['/resetPassword']);
  }
  constructor(public router:Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
