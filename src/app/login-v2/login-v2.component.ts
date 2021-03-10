import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from 
'@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.scss']
})
export class LoginV2Component implements OnInit {

 constructor() { }

  ngOnInit(): void {
  }
  passFormControl = new FormControl('', [
    Validators.required,
]);
confirmFormControl = new FormControl('', [
    Validators.required,
    ]);

     hide =true;

}
