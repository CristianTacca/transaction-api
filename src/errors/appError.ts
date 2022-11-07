import { Response } from "express";

class AppError extends Error {
  public statusCode: number;
  public response: string | string[] | object;

  constructor(statusCode: number, response: string | string[] | object) {
    super();
    this.statusCode = statusCode;
    this.response = response;
  }
}

const handleError = (err: Error, res: Response) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ error: err.response ? err.response : err.message });
  }

  return res.status(500).json({ error: "Internal Server error" });
};

export { AppError, handleError };
