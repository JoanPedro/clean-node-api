import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Joan Pedro',
        email: 'joan@email.com',
        password: '123123',
        passwordConfirmation: '123123'
      })
      .expect(200)
  })
})
