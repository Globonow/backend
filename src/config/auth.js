import User from '../app/models/User';

export default {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};

export const guards = {
  admin: 'admin',
  user: 'user',
};

export const providers = {
  user: User,
};
