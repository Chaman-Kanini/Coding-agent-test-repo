import type { components } from '../../api/schema';
import { getJson } from '../../core/api';

export const listOrderItems = () => getJson<components['schemas']['OrderItem'][]>('/api/order-items');

export const getOrderItem = (id: string) => getJson<components['schemas']['OrderItem']>(`/api/order-items/${id}`);

