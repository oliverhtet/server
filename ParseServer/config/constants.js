'use strict';

module.exports = Object.freeze({
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 1337,
  PARSE_MOUNT: process.env.PARSE_MOUNT || '/parse',

  APP_NAME: 'MGYSoftwareHouse',
  APP_ID: process.env.APP_ID || 'MGYSH',
  MASTER_KEY: process.env.MASTER_KEY || 'MGYSH',
  get SERVER_URL() {
    return process.env.SERVER_URL || `http://${this.HOST}:${this.PORT}${this.PARSE_MOUNT}`;
  },

  DATABASE_URI:
    process.env.MONGODB_URI ||
    process.env.MONGO_URL ||
    process.env.DATABASE_URL ||
    'mongodb://localhost:27017/dev',

  PARSE_DASHBOARD_USER_ID: process.env.PARSE_DASHBOARD_USER_ID || 'Admin',
  PARSE_DASHBOARD_USER_PASSWORD: process.env.PARSE_DASHBOARD_USER_PASSWORD || 'admin',
});
