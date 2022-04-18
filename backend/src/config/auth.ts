import 'dotenv/config';

interface IJWTSettings {
  secret: string;
  expiresIn: string;
}

export const settings: IJWTSettings = {
  secret: '941c421d551126ace7478d099cddfdb7',
  expiresIn: '1m',
};
