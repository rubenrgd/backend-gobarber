import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();
// IMPORTANTE: SoC: Separation of Concerns (Separação de preocupações)
// DTO : Data Transfer Object
// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default sessionsRouter;
