import type { components } from '../../api/schema';
import { getJson } from '../../core/api';

export const listLabels = () => getJson<components['schemas']['Label'][]>('/api/labels');

export const getLabel = (id: string) => getJson<components['schemas']['Label']>(`/api/labels/${id}`);

