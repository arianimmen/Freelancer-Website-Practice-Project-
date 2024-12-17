import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "./Stat";

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map(
    (item) => item.status === 2
  ).length;

  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
      <Stat
        color="primary"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="w-10 h-10 md:w-20 md:h-20" />}
      />
      <Stat
        color="green"
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        icon={<HiCurrencyDollar className="w-10 h-10 md:w-20 md:h-20" />}
      />
      <Stat
        color="orange"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiCollection className="w-10 h-10 md:w-20 md:h-20" />}
      />
    </div>
  );
}

export default Stats;
