module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '706c862f604e77020fab79c627b76fb2'),
  },
});
