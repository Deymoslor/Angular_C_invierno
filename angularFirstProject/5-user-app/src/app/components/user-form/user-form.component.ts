import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  @Output() newUserEM: EventEmitter<User> = new EventEmitter();
  @Output() openModalEventEmitter = new EventEmitter()
  @Input() user: User;
  constructor() {
    this.user = new User();
  }

  onSubmit(userForm: NgForm): void {
    if (userForm.valid){
      this.newUserEM.emit(this.user)
    console.log(this.user)
    }
    userForm.reset()
    userForm.resetForm()
  }

  onClear(userForm: NgForm): void {
    // userForm.reset()
    userForm.resetForm()
  }

  onOpenModal() {
    this.openModalEventEmitter.emit();
  }
}
