export interface database {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: string;
  logging: boolean;
  port: number;
  synchronize: boolean;
}

export interface server {
  port: number;
}

export interface logger {
  level: string;
}

export interface configInterface {
  env: string;
  logger: logger;
  server: server;
  database: database;
}
