import { BaseResponseType } from '@/types/request';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<BaseResponseType>) {
  if (JSON.parse(req.body)?.key === process.env.SECRET_KEY) {
    return res.status(200).json({ message: 'u are loged', success: true });
  }
  return res.status(404).json({ message: 'this key does not exist', success: false });
}
