import { Component, OnInit , Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-to-do',
  templateUrl: './user-to-do.component.html',
  styleUrls: ['./user-to-do.component.scss']
})
export class UserToDoComponent implements OnInit {
  @Input() listUser:any;
  @Output() updateUserEvent = new  EventEmitter<number>();
  @Output() deleteUserEvent = new  EventEmitter<number>();
  index:any
  constructor() { }

  ngOnInit(): void {
   
  }
  deleteUser(i:number){
    this.deleteUserEvent.emit(i)
  }
  updateUser(i:number){
    this.updateUserEvent.emit(i) 
  }

}
