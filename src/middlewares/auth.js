import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import config from '../config/configAuthJWT.js';
import Usuario from '../models/user.model.js';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, config.secret);

        if (decoded.usuario_id) {
            const usuario = await Usuario.findOne({
                where: { usuario_id: decoded.usuario_id },
            });
        }

        req.usuario_id = decoded.usuario_id;

        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }
};
