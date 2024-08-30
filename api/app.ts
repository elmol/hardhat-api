import express, { Request, Response } from 'express';
import { deploy } from '../connector/ERC20Contract';
import { StatusCodes } from 'http-status-codes';


const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to '
  });
});

app.post('/deploy', async (req: Request, res: Response) => {
  try {
    const erc20 = await deploy();
    const contract = {
      address: await erc20.getAddress(),
      name: await erc20.name()
    }
    res.status(StatusCodes.OK).json(contract);
  } catch (error: any) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;