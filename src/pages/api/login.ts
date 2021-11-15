import { BaseResponseType } from '@/types/request';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<BaseResponseType>) {
  if (req.method === 'POST') {
    if (JSON.parse(req.body)?.key === process.env.SECRET_KEY) {
      return res.status(200).json({ message: 'u are loged', success: true });
    }
    return res.status(404).json({ message: 'key not found', success: false });
  }
  return res.status(404).json({ message: '', success: false });
}
