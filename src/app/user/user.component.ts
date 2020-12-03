import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserService } from '../user.service';
import { IUser } from '../user/user';
import { Store,select } from '@ngrx/store';
import * as UserActions from '../user.actions';
import * as  fromUser   from '../user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  pageTitle = 'Users List';
  errorMessage = '';
  users:IUser[] = [];
  constructor(private store:Store) { }

  ngOnInit() {

    this.store.dispatch(new UserActions.LoadUsers); //action dispatch

    this.store.pipe(select(fromUser.getUsers)).subscribe(
      
        users =>{
          this.users = users;
        }
      
    );

    this.store.pipe(select(fromUser.getError)).subscribe(
      
      users =>{
        this.errorMessage = err;
      }
    
  );
   
  }

}
