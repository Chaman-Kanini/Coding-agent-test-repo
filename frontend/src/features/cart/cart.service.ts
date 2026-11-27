import type { components } from '../../api/schema';
import { getJson } from '../../core/api';

export const listCarts = () => getJson<components['schemas']['Cart'][]>('/api/carts');

export const getCart = (id: string) => getJson<components['schemas']['Cart']>(`/api/carts/${id}`);

