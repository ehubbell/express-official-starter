import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from '../src/knexfile';

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment as keyof typeof knexConfig];

const knex = Knex(config);

Model.knex(knex);

export { knex, Model };