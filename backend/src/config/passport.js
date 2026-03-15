import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { env } from './env.js';
import { User } from '../models/User.js';

export const initPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: env.googleClientId,
        clientSecret: env.googleClientSecret,
        callbackURL: '/api/auth/google/callback'
      },
      async (_, __, profile, done) => {
        const email = profile?.emails?.[0]?.value;
        let user = await User.findOne({ email });
        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email,
            authProvider: 'google',
            isEmailVerified: true
          });
        }
        done(null, user);
      }
    )
  );
};
