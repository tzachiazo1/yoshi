// import { WithAspects } from '@wix/wix-express-aspects';
import { WebRequest } from '@wix/serverless-api';
import * as t from 'io-ts';

// io-ts' types
export const requestPayloadCodec = t.type({
  fileName: t.string,
  functionName: t.string,
  args: t.array(t.any),
});

export type RequestPayload = t.TypeOf<typeof requestPayloadCodec>;

// General stuff
export type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
export type OptionalPromise<T> = T | Promise<T>;
export type FunctionArgs = Array<any>;
export type FunctionResult = OptionalPromise<any>;

// Server function types
export type FunctionContext = {
  req: WebRequest; // & WithAspects;
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
  req: WebRequest; // & WithAspects;
  context: any;
  params: { [name: string]: any | undefined };
  initData: any;
  config: any;
};

export type RouteFunction<Result extends FunctionResult> = (
  this: RouteContext,
) => Result;

export type InitServerFunction = (context: any) => any;
