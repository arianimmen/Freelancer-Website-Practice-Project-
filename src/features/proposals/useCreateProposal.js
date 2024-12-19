import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../../services/proposalService";
import toast from "react-hot-toast";

export default function useCreateProposal() {
  const queryClient = useQueryClient();
  const { mutate: createProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["proposals"],
      });
    },
  });

  return { createProposal, isCreating };
}
