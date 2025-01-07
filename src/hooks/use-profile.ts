import { userApi, type UserProfile } from "@/api/user-api.js";
import { QueryKeys } from "@/const/query-key.js";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

type useProfileQueryOptions = Omit<
  UseQueryOptions<UserProfile>,
  "queryKey" | "queryFn"
>;

export const useProfile = (
  options?: useProfileQueryOptions
) => {
  return useQuery({
    ...options,
    queryKey: [QueryKeys.GET_PROFILE],
    queryFn: userApi.getProfile,
  });
};
