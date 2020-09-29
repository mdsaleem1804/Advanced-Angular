import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { take, map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form: FormGroup;
  name = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "name": this.name,
      "email": this.email
    });
    this.form.valueChanges
        .subscribe( data => {
          if (this.form.valid) {
            data.lastUpdateTS = new Date();
            console.log(JSON.stringify(data))
          }
        });
  }

  onSubmit() {
    console.log("Form submitted!");
  }
}




