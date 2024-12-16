import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function userUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });
  const { user } = data || {};
  return { isLoading, user };
}
