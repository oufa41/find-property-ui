import { environment } from '../../environments/environment';
export const backend = `${environment.backend}`;


export const API = {
    PROPERTY_URL: backend + '/property/',
};
