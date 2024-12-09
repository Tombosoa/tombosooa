import { getCachedConfiguration } from "@/lib/utils";
import { SecurityApi,
    UserApi
 } from "@/gen-ts";
import { AxiosResponse } from "axios";

export const securityApi = new SecurityApi(getCachedConfiguration());
export const userApi = new UserApi(getCachedConfiguration());

export type UnwrapResult<TReturn extends () => Promise<AxiosResponse<any>>> = TReturn extends () => Promise<
  AxiosResponse<infer Res>
>
  ? Res
  : never;

export const unwrap = async <Fn extends () => Promise<AxiosResponse<any>>>(execute: Fn): Promise<UnwrapResult<Fn>> => {
  const _ = await execute();
  return _.data;
};
