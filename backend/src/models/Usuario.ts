import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/connection'; 

class Usuario extends Model {
  public id!: number;
  public nome!: string;
  public email!: string;
  public whatsapp!: string;
  public senha!: string;
  public cpf!: string;
  public sexo!: string;
  public municipio!: string;
  public rua!: string;
  public numero!: string;
  public foto!: Blob;


}
Usuario.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    sexo: {
      type: DataTypes.ENUM('M', 'F', 'Outro'),
      allowNull: false,
    },
    municipio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foto: {
      type: DataTypes.BLOB, // Armazena o caminho ou nome do arquivo
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'usuarios',
    timestamps: true, // Habilita os campos createdAt e updatedAt
  }
);

export default Usuario;
