import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as userActions from "../state/user.actions";
import * as fromUser from "../state/user.reducer";
import { User } from "../user.model";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor( private fb: FormBuilder,
    private store: Store<fromUser.AppState>) { }

  ngOnInit(){
    this.userForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      company: ["", Validators.required],
      gender: ["", Validators.required],
      age: ["", Validators.required],
    });
  }

  createUser() {
    const newUser: User = {
      name: this.userForm.get("name").value,
      email: this.userForm.get("email").value,
      company: this.userForm.get("company").value,
      gender: this.userForm.get("gender").value,
      age: this.userForm.get("age").value,
      status: this.userForm.get("status").value
    };

    this.store.dispatch(new userActions.CreateUser(newUser));

   // this.userForm.reset();
  }

}
