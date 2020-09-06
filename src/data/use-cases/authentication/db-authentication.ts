import { Authentication, AuthenticationModel } from '../../../domain/usecases/authentication'
import { LoadAccountByEmailRepository } from '../../protocols/db/load-account-by-email-repository'
import { HashComparer } from '../../protocols/criptography/hash-comparer'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepository,
    private readonly hashComparer: HashComparer
  ) {}

  async auth (authetication: AuthenticationModel): Promise<string> {
    const account = await this.loadAccountByEmailRepository.load(authetication.email)
    if (account) await this.hashComparer.compare(authetication.password, account.password)
    return null
  }
}
