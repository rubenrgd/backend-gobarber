import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

// IMPORTANTE: SoC: Separation of Concerns (Separação de preocupações)
// DTO : Data Transfer Object
// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
