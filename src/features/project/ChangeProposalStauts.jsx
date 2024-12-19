import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import UseChangeProposalStatus from "./UseChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeProposalStauts({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isUpdatings } = UseChangeProposalStatus();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();

  const onSubmit = (data) => {
    changeProposalStatus(
      { proposalId, projectId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: [`project`, id] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          register={register}
          label="تغییر وضعیت"
          required
          options={options}
        />
        <div className="!mt-8">
          {isUpdatings ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStauts;
