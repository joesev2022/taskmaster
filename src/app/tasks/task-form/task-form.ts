import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Task, TaskStatus } from '../../models/task.model';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss'
})
export class TaskForm {
  @Output() taskCreated = new EventEmitter<Task>();

  form: FormGroup;

  statuses: TaskStatus[] = ['pendiente', 'en-progreso', 'completada'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['pendiente', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const newTask: Task = {
        id: uuidv4(),
        title: this.form.value.title,
        description: this.form.value.description,
        status: this.form.value.status,
        createdAt: new Date()
      };
      this.taskCreated.emit(newTask);
      this.form.reset({ status: 'pendiente' });
    }
  }
}
