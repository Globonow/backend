import User from '../app/models/User';
import Admin from '../app/models/Admin';

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
  admin: Admin,
};
