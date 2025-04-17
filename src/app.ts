import express from 'express';
import cors from 'cors';
import usuariosRoutes from './routes/usuarios.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', usuariosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
