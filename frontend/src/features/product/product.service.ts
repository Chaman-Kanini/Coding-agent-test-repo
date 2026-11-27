import type { components } from '../../api/schema';
import { getJson } from '../../core/api';

export const listProducts = () => getJson<components['schemas']['Product'][]>('/api/products');

export const getProduct = (id: string) => getJson<components['schemas']['Product']>(`/api/products/${id}`);

