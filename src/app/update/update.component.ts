import { splitAtColon } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  submitted = false;
  updateForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })
  constructor(private router:ActivatedRoute,private route:Router) { }
  listToDo: any;
  updateToDoForm?:FormGroup ;
  toDoIndex: any;
  ngOnInit(): void {
    this.updateToDoForm = new FormGroup({
      id :new FormControl(''),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
    this.toDoIndex=this.router.snapshot.params['i']; 
    this.showData()
  }
  showData() {
    this.listToDo = JSON.parse(localStorage.getItem('Added') || '[]')
    let toDoData= this.listToDo[this.toDoIndex]
    this.updateToDoForm?.patchValue(toDoData)
  }
  saveUpdate() {
    this.listToDo = JSON.parse(localStorage.getItem('Added') || '[]')
    this.listToDo.splice(this.toDoIndex,1,this.updateToDoForm?.value);
    localStorage.setItem('Added',JSON.stringify(this.listToDo))
    // window.location.href='http://localhost:4200/list'
    // this.route.navigate(['/list'])
    this.route.navigateByUrl('/list')
  }
}
