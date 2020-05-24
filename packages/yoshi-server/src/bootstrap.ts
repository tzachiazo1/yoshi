const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const { bootstrapServer } = require('./bootstrap-env');
  bootstrapServer().start();
} else {
  require('./bootstrap-ng');
}
