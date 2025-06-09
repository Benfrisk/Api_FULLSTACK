// config/BD.ts
import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

import Product from '../models/Product.models';
import clients from '../models/Client.models';

const BD = new Sequelize(process.env.BD_URL!, {
  models: [Product, clients],
});


export default BD;
