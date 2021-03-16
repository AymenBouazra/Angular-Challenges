import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() { }
 listTodo: any;

  ngOnInit(): void {
    this.listTodo =JSON.parse(localStorage.getItem('Added') || '[]')
  }
  delete(i:number){
    this.listTodo.splice(i,1)
    localStorage.setItem('Added',JSON.stringify(this.listTodo))
  }
     
}
