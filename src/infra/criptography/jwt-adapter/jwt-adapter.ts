import { Encrypter } from '../../../data/protocols/criptography/encrypter'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter {
  constructor (private readonly secrect: string) {}

  encrypt = async (value: string): Promise<string> => {
    const accessToken = await jwt.sign({ id: value }, this.secrect)
    return accessToken
  }
}
