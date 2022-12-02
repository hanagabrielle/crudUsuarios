import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import config from '../config/configAuthJWT.js';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido corretamente' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, config.secret);

        req.usuario_id = decoded.usuario_id;

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
};
