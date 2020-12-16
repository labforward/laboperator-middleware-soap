import { Request } from 'express';

export default (fakeRequest: unknown): Request => fakeRequest as Request;
