import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

export default function userUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
  });
}
