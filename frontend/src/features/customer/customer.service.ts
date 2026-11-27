import type { components } from '../../api/schema';
import { getJson } from '../../core/api';

export const listCustomers = () => getJson<components['schemas']['Customer'][]>('/api/customers');

export const getCustomer = (id: string) => getJson<components['schemas']['Customer']>(`/api/customers/${id}`);

