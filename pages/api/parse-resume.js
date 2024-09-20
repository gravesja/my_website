
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { file } = req.body;
      // Perform parsing logic on the resume file
      res.status(200).json({ message: 'File parsed successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  