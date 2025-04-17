import { Router } from 'express';
import { criarUsuario } from '../controllers/usuarios.controller';

const router = Router();

// Rota de cadastro de usuário
router.post('/usuarios', criarUsuario);

export default router;
