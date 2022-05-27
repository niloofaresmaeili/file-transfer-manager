import { sign, SignOptions, verify, VerifyOptions, JwtPayload, Jwt } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

interface TokenPayload {
  exp: number;
  accessTypes: string[];
  name: string;
  password: string;
  userId: number;
}

/**
 * generates JWT used for local testing
 */
export function generateToken() {
  // information to be encoded in the JWT
  const payload = {
    name: 'admin',
    password: 'password',
    userId: 1,
    accessTypes: [
      'getDirectory',
      'getPath',
      'uploadFile',
      'downloadFile',
      'makeDirectory'
    ]
  };
  // read private key value
  const privateKey = fs.readFileSync(path.join(__dirname, '../../security/private.key'));

  const signInOptions: SignOptions = {
    // RS256 uses a public/private key pair. The API provides the private key
    // to generate the JWT. The client gets a public key to validate the
    // signature
    algorithm: 'RS256',
    expiresIn: '1h'
  };

  // generate JWT
  return sign(payload, privateKey, signInOptions);
};

/**
 * checks if JWT token is valid
 *
 * @param token the expected token payload
 */
export async function validateToken(token: string): Promise<TokenPayload> {
  const publicKey = fs.readFileSync(path.join(__dirname,'../../security/public.key'));

  const verifyOptions: VerifyOptions = {
    algorithms: ['RS256'],
  };

  const decoded = (await verify(token, publicKey, verifyOptions)) as TokenPayload;
  return decoded
}