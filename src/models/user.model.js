import { Model, DataTypes, Sequelize } from 'sequelize';
import bcrypt from 'bcryptjs';

class users extends Model {
    static init(sequelize) {
        super.init(
            {
                usuario_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                },
                usuario_nome: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                usuario_email: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                usuario_senha: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                password: Sequelize.VIRTUAL,
                usuario_tipo: {
                    type: DataTypes.BOOLEAN,
                    allowNull: true,
                },
                usuario_telefone: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                created_at: {
                    type: DataTypes.DATE,
                    allowNull: true,
                },
            },
            {
                sequelize,
            },
            {
                tableName: 'users'
            }
        );

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.usuario_senha = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.usuario_senha);
    }
}

export default users; 
