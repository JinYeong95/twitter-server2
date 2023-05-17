import mysql from "mysql2";
import { config } from "../config.js"
import SQ from 'sequelize';
import mariadb from 'mariadb'

const { host, user, database, password } = config.db;

export const sequelize = new SQ.Sequelize(database, user, password, {
    host,
    dialect: 'mariadb',
    logging: false,
    timezone: '+09:00',
    port: '32312'
});