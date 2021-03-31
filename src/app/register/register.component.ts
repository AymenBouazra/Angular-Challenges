import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupName, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.pattern(/admin/)]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [this.forbiddenEmail(/@gmail/), Validators.required, Validators.email]),
    emailConfirmation: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(8)])
  },{
    validators: [this.passwordConfirmation, this.emailConfirmation]
  });
  constructor() { }

  ngOnInit(): void {
  }
  register() {
    this.submitted = true
    console.log(this.registerForm.controls.email.valid);

    if (this.registerForm.invalid) {
      return;
    }
    var users = JSON.parse(localStorage.getItem('Registered') || '[]')
    users.push(this.registerForm.value)
    localStorage.setItem('Registered', JSON.stringify(users))

  }
  forbiddenEmail(forbiddenEmail: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = forbiddenEmail.test(control.value);
      return !forbidden ? { 'forbiddenEmail': { value: control.value } } : null
    }
  }
  passwordConfirmation(group: AbstractControl) : { [key: string]: any } | null{
    const password= group.get('password')
    const passwordConfirmation= group.get('passwordConfirmation')
    return password && passwordConfirmation && password.value!==passwordConfirmation.value ? {'mismatch': true} : null
  }
  emailConfirmation(group: AbstractControl) : { [key: string]: any } | null{
    const email= group.get('email')
    const emailConfirmation= group.get('emailConfirmation')
    return email && emailConfirmation && email.value!==emailConfirmation.value ? {'mismatch': true} : null
  }


}
