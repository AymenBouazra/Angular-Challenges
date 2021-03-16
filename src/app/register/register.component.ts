import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted= false;
  registerForm: FormGroup = new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName :new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required,Validators.email]),
    emailConfirmation : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(8)]),
    passwordConfirmation : new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
  constructor() { }

  ngOnInit(): void {
  }
  register(){
    this.submitted= true
    if(this.registerForm.invalid){ 
      return;
    }
    var users=JSON.parse(localStorage.getItem('Registered') || '[]' ) 
    users.push(this.registerForm.value)
    localStorage.setItem('Registered',JSON.stringify(users))
  }
}
