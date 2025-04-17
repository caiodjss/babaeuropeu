import { Request, Response } from 'express';
import { connection } from '../database/connection';

// Função para criar um novo usuário
export const criarUsuario = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const [rows] = await connection.query(
      'INSERT INTO usuarios (username, password) VALUES (?, ?)',
      [username, password]
    );

    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};
