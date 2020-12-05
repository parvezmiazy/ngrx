import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from "rxjs";
import * as UserActions from '../state/user.actions';
import * as fromUser from "../state/user.reducer";
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {


  users$: Observable<User[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromUser.AppState>) {}
  ngOnInit() {

    this.store.dispatch(new UserActions.LoadUsers());
    this.users$ = this.store.pipe(select(fromUser.getUsers));
    this.error$ = this.store.pipe(select(fromUser.getError));

    
   
  }

  deleteUser(user:User) {
    if (confirm("Are You Sure You want to Delete the User?")) {
      this.store.dispatch(new UserActions.DeleteUser(user.id));
    }
  }

  editUser(user: User) {
    this.store.dispatch(new UserActions.LoadUser(user.id));
  }

}
