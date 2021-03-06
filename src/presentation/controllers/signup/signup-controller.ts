import { HttpRequest, HttpResponse, Controller, AddAccount } from './signup-controller-protocols'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'
import { Validation } from '../../protocols/validation'

export class SignUpController implements Controller {
  constructor (
    private readonly addAccout: AddAccount,
    private readonly validation: Validation
  ) {}

  handle = async (httpRequest: HttpRequest): Promise<HttpResponse> => {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = httpRequest.body
      const account = await this.addAccout.add({
        name,
        email,
        password
      })
      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
