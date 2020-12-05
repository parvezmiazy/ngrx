import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store} from "@ngrx/store";
import { Observable } from "rxjs";
import * as userActions from "../state/user.actions";
import * as fromUser from "../state/user.reducer";
import { User } from "../user.model";
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class EditUserComponent implements OnInit {

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

  const user$: Observable<User> = this.store.select(
    fromUser.getCurrentUser
  )

  user$.subscribe(currentUser => {
    if (currentUser) =>{
        this.userForm.patchValue({
        name: currentUser.name,
        email: currentUser.email,
        company: currentUser.company,
        gender: currentUser.gender,
        age: currentUser.age,
        id: currentUser.id
      });
    }
  })
}

  updateUser() {
    const updatedUser: User = {
      name: this.userForm.get("name").value;
      email: this.userForm.get("email").value,
      company: this.userForm.get("company").value,
      gender: this.userForm.get("gender").value,
      age: this.userForm.get("age").value,
      status: this.userForm.get("status").value,
      id: this.userForm.get("id").value
    };

    this.store.dispatch(new userActions.UpdateUser(updatedUser));

    
  }

}
