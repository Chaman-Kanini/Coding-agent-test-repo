import type { components } from '../../api/schema';
import { getJson } from '../../core/api';

export const listTaskItems = () => getJson<components['schemas']['TaskItem'][]>('/api/task-items');

export const getTaskItem = (id: string) => getJson<components['schemas']['TaskItem']>(`/api/task-items/${id}`);

