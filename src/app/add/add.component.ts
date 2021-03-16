import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  submitted=false;
  addForm: FormGroup = new FormGroup({
    name : new FormControl('',[Validators.required]),
    description :new FormControl('',[Validators.required]),
    // id : new FormControl(Math.floor(Math.random(1000)))
  });
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.submitted= true
    if(this.addForm.invalid){ 
      return;
    }
    var add=JSON.parse(localStorage.getItem('Added') || '[]' ) 
    var user={id:Math.floor(Math.random()*1000),name:this.addForm.value.name,description:this.addForm.value.description}
    add.push(user)
    localStorage.setItem('Added',JSON.stringify(add))
  }

}
