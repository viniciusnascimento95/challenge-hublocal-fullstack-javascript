import 'dotenv/config';

interface IJWTSettings {
  secret: string;
  expiresIn: string;
}

export const settings: IJWTSettings = {
  secret: process.env.JWT_SECRET,
  expiresIn: '1m',
};
