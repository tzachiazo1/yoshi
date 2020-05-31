import { Request, Response } from 'express';
import { WebRequest } from '@wix/serverless-api';

// General stuff
export type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
export type OptionalPromise<T> = T | Promise<T>;
export type FunctionArgs = Array<any>;
export type FunctionResult = OptionalPromise<any>;

// Server function types
export type FunctionContext = {
  req: Request;
  res: Response;
  context: any;
  initData: any;
  config: any;
};

export type ServerFunction<
  Result extends FunctionResult,
  Args extends FunctionArgs
> = (this: FunctionContext, ...args: Args) => Result;

export type DSL<Result extends FunctionResult, Args extends FunctionArgs> = {
  fileName: string;
  functionName: string;
  __fn__: ServerFunction<Result, Args>;
};

// Route function types
export type RouteContext = {
  req: Request & WithAspects;
  res: Response;
  context: any;
  params: { [name: string]: any | undefined };
  initData: any;
  config: any;
};

export type RouteContextServerless = {
  req: WebRequest;
  context: any;
  params: { [name: string]: any | undefined };
  initData: any;
  config: any;
};

export type RouteFunction<Result extends FunctionResult> = (
  this: RouteContext,
) => Result;

export type RouteFunctionServerless<Result extends FunctionResult> = (
  this: RouteContextServerless,
) => Result;

export type InitServerFunction = (context: any) => any;
