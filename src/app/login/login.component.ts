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
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted= false;
  loginForm: FormGroup = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password :new FormControl('',[Validators.required]),
  });
  constructor(private  router:Router) { }

  ngOnInit(): void {
  }
 login(){
  this.submitted= true;
  if(this.loginForm.invalid){ 
    return;
  }
  var users = JSON.parse(localStorage.getItem('Registered') || '[]' ) 
  let connect = users.find((x:any) =>x.email == this.loginForm.value.email && x.password==this.loginForm.value.password) 
  if(connect==undefined){
    alert('verify your email and password')
  } else {
    this.router.navigateByUrl('/list')
    this.router.navigate(['/list'])
  }
 }

}



