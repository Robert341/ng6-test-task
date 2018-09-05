import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;

  active = {
    firstName: false,
    lastName: false,
    email: false,
    areaCode1: false,
    areaCode2: false,
    country: false,
    pass: false,
  };

  checked = false;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this._formBuilder.group({
      firstName: [null, [Validators.required, Validators.pattern(/^[A-Z][a-z]+$/)]],
      lastName: [null, [Validators.required, Validators.pattern(/^[A-Z][a-z]+$/)]],
      email: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9_.-]+@+[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4}$/)]],
      areaCode1: [null, Validators.required],
      areaCode2: [null, Validators.required],
      country: [null, [Validators.required, Validators.pattern(/^[A-Z][a-z]+$/)]],
      pass: [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z]).{8,}$/)]]
    });
  }

  onSubmit() {
    this.checked = true;

    if (this.registerForm.valid) {
      window.location.reload();
    }
  }
}
