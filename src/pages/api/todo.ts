import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

import { BaseResponseType } from '@/types/request';

const prisma = new PrismaClient();

type NextReqResType<T = BaseResponseType> = (req: NextApiRequest, res: NextApiResponse<T>) => Promise<void>;

const get: NextReqResType = async (_, res) => {
  const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' } });
  return res.status(200).json({ message: '', success: true, body: todos });
};

const post: NextReqResType = async (req, res) => {
  if (!!req.body.todo) {
    const count = await prisma.todo.count();
    if (count >= 10) {
      return res.json({ message: 'Desculpe, o limite de tarefas é somente 20', success: false });
    }

    const totdoCreated = await prisma.todo.create({
      data: {
        todo: req.body.todo,
      },
    });

    return res.status(201).json({ message: '', success: true, body: { id: totdoCreated.id } });
  }
  return res.status(404).json({ message: 'Nada encontrado', success: false });
};

const put: NextReqResType = async (req, res) => {
  if (!!['id', 'todo', 'done'].every((i) => req.body[i] !== 'undefined')) {
    const { id, todo, done } = req.body;
    const data = { todo, done };
    await prisma.todo.update({
      data,
      where: { id },
    });
    return res.status(201).json({ message: 'Todo atualizado', success: true });
  }
  return res.status(404).json({ message: 'Nada encontrado', success: false });
};

const del: NextReqResType = async (req, res) => {
  if (!!req.query.id) {
    await prisma.todo.delete({
      where: { id: Number(req.query.id) },
    });
    return res.status(200).json({ message: 'Deletado com sucesso', success: true });
  }
  return res.status(404).json({ message: 'Nada encontrado', success: false });
};

const notFound: NextReqResType = async (_, res) => res.status(404).json({ message: 'Nada encontrado', success: false });
const METHODS = {
  get,
  post,
  put,
  delete: del,
};

type HTTP_METHOD_TYPE = keyof typeof METHODS | undefined;

export default function handler(req: NextApiRequest, res: NextApiResponse<BaseResponseType>) {
  if (req.headers.authorization !== process.env.SECRET_KEY) {
    return res.status(401).json({ message: 'unauthorized', success: false });
  }
  req.body = JSON.parse(req.body || '{}');

  const HTTP_METHOD = req.method?.toLowerCase() as HTTP_METHOD_TYPE;

  if (HTTP_METHOD) {
    return METHODS[HTTP_METHOD](req, res);
  }
  return notFound(req, res);
}
