import { BaseResponseType } from '@/types/request';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<BaseResponseType>) {
  return res.status(200).json({ message: '', success: true, body: process.env });
}
