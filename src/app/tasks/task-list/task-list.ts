import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TaskForm } from '../task-form/task-form';
import { Task } from '../../models/task.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, TaskForm],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList {

  /* Objects */
  tasks: Task[] = [
    {
      id: uuidv4(),
      title: 'Diseñar interfaz de login',
      description: 'Crear UI con Angular Material y validaciones.',
      status: 'pendiente',
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      title: 'Conectar API de tareas',
      description: 'Usar servicio en Angular para obtener datos.',
      status: 'en-progreso',
      createdAt: new Date()
    },
    {
      id: uuidv4(),
      title: 'Pruebas de funcionalidad',
      description: 'Asegurar que todo funcione correctamente.',
      status: 'completada',
      createdAt: new Date()
    }
  ];

  addTask(task: Task) {
    this.tasks.unshift(task);
  }

}
