import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this._formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      areaCode1: [null, Validators.required],
      areaCode2: [null, Validators.required],
      pass: [null, Validators.required],
      rePass: [null, Validators.required]
    });
  }

  onSubmit() {
    window.location.reload();
  }
}
