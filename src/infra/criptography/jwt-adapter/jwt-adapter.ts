import { Encrypter } from '../../../data/protocols/criptography/encrypter'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter {
  constructor (public readonly secret: string) {}

  encrypt = async (value: string): Promise<string> => {
    const accessToken = await jwt.sign({ id: value }, this.secret)
    return accessToken
  }
}
