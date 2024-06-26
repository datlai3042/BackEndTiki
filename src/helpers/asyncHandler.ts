import { NextFunction, Request, RequestHandler, Response } from 'express'

export const asyncHandler = (fn: RequestHandler): RequestHandler => {
      return (req: Request, res: Response, next: NextFunction) => {
            return Promise.resolve(fn(req, res, next)).catch(next)
      }
}
