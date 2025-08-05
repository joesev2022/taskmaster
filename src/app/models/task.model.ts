export type TaskStatus = 'pendiente' | 'en-progreso' | 'completada';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: Date;
}
