import jwt from 'jsonwebtoken';

export const auth = async (req: any, res: any, next:any) => {
  const token = req.headers.authorization.split(' ')[1];
  const isCustomAuth = token.length < 500;
  let decodedData;

  try {
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, 'test');

      req.userId = decodedData;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  }
  catch (error) {
    console.log(error);
  }
};

