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
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('bonjour')
  }
  
    emailFormControl =new FormControl('', [
      Validators.required,
      Validators.email,
    ])
    passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
    matcher = new ErrorStateMatcher();

}



