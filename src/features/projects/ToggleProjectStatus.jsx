import { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";

function ToggleProjectStatus({ project }) {
  const [enabled, setEnabled] = useState(
    project.status === "OPEN" ? true : false
  );

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    let status;
    if (project.status === "OPEN") status = "CLOSED";
    else status = "OPEN";

    toggleProjectStatus(
      { id: project._id, data: { status } },
      {
        onSuccess: () => {
          setEnabled((prev) => !prev);
        },
      }
    );
  };

  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          label={project.status === "OPEN" ? "باز" : "بسته"}
          enabled={enabled}
          toggleHandler={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
