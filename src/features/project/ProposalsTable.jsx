import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>فریلنسر</th>
          <th>توضیح</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت درخواست</th>
          <th>عملیات</th>
        </Table.Header>

        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} index={index} proposal={proposal} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalsTable;
