import jwt from 'jsonwebtoken';
import fs from 'fs';

const token=localStorage.getItem('token');
const clavePublica = fs.readFileSync('public.key', 'utf8');

jwt.verify(token, clavePublica, { algorithm: 'RS256' }, (error, decoded) => {
    if (error) {
        console.log('Error:', error.message);
    } else {
        console.log('Token decodificado:', decoded);
    }
});