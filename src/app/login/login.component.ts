// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//     console.log('bonjour')
//   }
//   numbers= new FormGroup({
//     number1: new FormControl(''),
//     number2: new FormControl(''),
//   });
//   affichage(): void {
    
//     console.log(this.numbers.controls['number1'].value+this.numbers.controls['number1'].value);
    
//   }

// }

import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl,FormGroup,Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required]),
    password :new FormControl('',[Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }
 login(){
  var users = JSON.parse(localStorage.getItem('Registered') || '[]' ) 
  // let connect = users.find((x) =>x.email == this.loginForm.email.value && x.password==password.value)  )
  
 }

}



