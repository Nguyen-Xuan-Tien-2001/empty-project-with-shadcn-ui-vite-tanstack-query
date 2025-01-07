import type { ResponseData } from "@/api/axios-client.js";
import { userApi, type accountInput, type UserProfile } from "@/api/user-api.js";
import { QueryKeys } from "@/const/query-key.js";
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from "@tanstack/react-query";

type useProfileQueryOptions = Omit<
  UseMutationOptions<ResponseData<UserProfile>, Error, accountInput, unknown>,
  "mutationFn"
>;

export const useLogin = (options?: useProfileQueryOptions) => {
  const queryClient = useQueryClient();
  return useMutation({
    ...options,
    onSuccess: (data) => {
      console.log('login success',data);
      localStorage.setItem('Token',data.data.token);
      queryClient.invalidateQueries({ queryKey: [QueryKeys.LOGIN] });
    },
    mutationFn: (variables: accountInput) => userApi.login(variables),
  });
};
