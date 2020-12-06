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
  submitted = false;

  constructor( private fb: FormBuilder,
    private store: Store<fromUser.AppState>) { }

  ngOnInit(){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.minLength(11)]]
    });
  }
  get f() { return this.userForm.controls; }
  createUser() {
    this.submitted = true;

    if (this.userForm.invalid)
    {
      return;
    }
  else{
    const newUser: User = {
      name: this.userForm.get("name").value,
      email: this.userForm.get("email").value,
      company: this.userForm.get("company").value,
      gender: this.userForm.get("gender").value,
      age: this.userForm.get("age").value,
    };

    this.store.dispatch(new userActions.CreateUser(newUser));

    this.userForm.reset();
    }
 
  }

}
