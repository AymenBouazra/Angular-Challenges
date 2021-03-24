import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  submitted = false;
  userDetailForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    skills : new FormArray([])
  });
  users : any;
  constructor() {
    
  }
  get getSkills(): FormArray{
    return this.userDetailForm.get('skills') as FormArray
  }
  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]')
  }
  
  addRow() {
    this.getSkills.push( new FormGroup ({
      skill : new FormControl('',Validators.required),
      note : new FormControl('',Validators.required)
    }))
  }
  removeLastRow(){
    this.getSkills.removeAt(this.getSkills.length - 1)
  }
  removeRow(i:number){
 
    this.getSkills.removeAt(i)
  }
  removeAllRow(){
    for (let index = 0 ;this.getSkills.length != 0; index++) {
      this.getSkills.removeAt(0)  
    }
    
    // while(this.getSkills.length !== 0){
    //   this.getSkills.removeAt(0)
    // }
  }
  skills(){
this.submitted = true
  }

}
