import { Component, OnInit , Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {
  index:any;
  addUserForm :FormGroup = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required)
  });
  submitted=false;
  userData:any[]=[]
  showUpdateButton = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  addUser(){
    this.submitted=false
    if(this.addUserForm.invalid){this.submitted=true;
      return;
    }
    this.userData.push(this.addUserForm.value)
    this.addUserForm.reset()
    this.submitted=false
  }
  cancel(){
    this.addUserForm.reset()
    this.showUpdateButton = false;
  }
  showUserData(i:number){
    this.index=i;
    const data=this.userData[i]
    this.addUserForm.patchValue(data)
    this.showUpdateButton= true;
  }
  saveUpdate(){
    this.submitted=false;
    if(this.addUserForm.invalid){this.submitted=true
      return;
    }
    this.showUpdateButton= false;
    this.userData.splice(this.index,1,this.addUserForm.value)
    this.addUserForm.reset()
  }
  deleteUser(i:number){
    this.userData.splice(i,1)
  }
}
