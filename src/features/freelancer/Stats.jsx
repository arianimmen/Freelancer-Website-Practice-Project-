import {
  HiCollection,
  HiCurrencyDollar,
  HiOutlineViewGrid,
} from "react-icons/hi";

import toPersianNumbersWithComma from "../../utils/toPersianNumbers";
import Stat from "../../ui/Stat";

function Stats({ proposals }) {
  const numOfProposals = proposals.length;

  const acceptedProposals = proposals.filter((item) => item.status === 2);

  const balance = acceptedProposals.reduce(
    (acc, proposal) => (acc += proposal.price),
    0
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
      <Stat
        color="primary"
        title="پروژه ها"
        value={toPersianNumbersWithComma(numOfProposals)}
        icon={<HiOutlineViewGrid className="w-10 h-10 md:w-20 md:h-20" />}
      />
      <Stat
        color="green"
        title="تایید شده"
        value={toPersianNumbersWithComma(acceptedProposals.length)}
        icon={<HiCollection className="w-10 h-10 md:w-20 md:h-20" />}
      />
      <Stat
        color="orange"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCurrencyDollar className="w-10 h-10 md:w-20 md:h-20" />}
      />
    </div>
  );
}

export default Stats;
