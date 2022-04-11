const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: "mysql",
        host: env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi_bd'),
        username: env('DATABASE_USERNAME', 'Strapiadmin'),
        password: env('DATABASE_PASSWORD', 'Mayorista@2022'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});

// module.exports = ({ env }) => ({
//  connection: {
//    client: 'sqlite',
//    connection: {
//      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//    },
//    useNullAsDefault: true,
//  },
// });
