import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '$/services/database';

async function handlePOST(req: NextApiRequest, res: NextApiResponse) {
  database
    .from('todos')
    .insert([req.body])
    .then(({ data, error }) => {
      if (!error) {
        res.status(200).json(data);
      }
      res.status(500).json({ error });
    });
}

async function handleGET(req: NextApiRequest, res: NextApiResponse) {
  database
    .from('todos')
    .select('*')
    .then(({ data, error }) => {
      if (!error) {
        res.status(200).json(data);
      }
      res.status(500).json({ error });
    });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return handlePOST(req, res);

    case 'GET':
      return handleGET(req, res);

    default:
      res.status(400).json({ error: 'Method not supported' });
  }
}
