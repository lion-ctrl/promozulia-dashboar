module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
