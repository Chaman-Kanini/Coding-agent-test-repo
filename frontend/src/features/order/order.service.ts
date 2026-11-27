import type { components } from '../../api/schema';
import { getJson } from '../../core/api';

export const listOrders = () => getJson<components['schemas']['Order'][]>('/api/orders');

export const getOrder = (id: string) => getJson<components['schemas']['Order']>(`/api/orders/${id}`);

