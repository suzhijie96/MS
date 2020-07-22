import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-camera',
  templateUrl: './add-camera.component.html',
  styleUrls: ['./add-camera.component.css']
})
export class AddCameraComponent implements OnInit {

  validateForm = new FormGroup({
    number: new FormControl(null, [Validators.required]),
    validate: new FormControl(null, [Validators.required])
  });
    public submitForm(): void {
      alert(1);
      console.log(this.validateForm.value);
      // for (const i in this.validateForm.controls) {
      //   console.log(this.validateForm.controls[i]);
      //   // this.validateForm.controls[i].markAsDirty();
      // }
    }

  constructor() { }

  ngOnInit(): void {

  }


}
