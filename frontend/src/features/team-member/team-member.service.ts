import type { components } from '../../api/schema';
import { getJson } from '../../core/api';

export const listTeamMembers = () => getJson<components['schemas']['TeamMember'][]>('/api/team-members');

export const getTeamMember = (id: string) => getJson<components['schemas']['TeamMember']>(`/api/team-members/${id}`);

