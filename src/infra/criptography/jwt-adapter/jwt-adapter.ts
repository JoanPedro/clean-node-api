import { Encrypter } from '../../../data/protocols/criptography/encrypter'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter {
  constructor (private readonly secrect: string) {}

  encrypt = async (value: string): Promise<string> => {
    await jwt.sign({ id: value }, this.secrect)
    return new Promise(resolve => resolve(null))
  }
}
