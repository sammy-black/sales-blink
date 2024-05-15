import PropTypes from "prop-types";
import { LuUserPlus2, LuUserCheck2 } from "react-icons/lu";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { IoFlash } from "react-icons/io5";

import DialogContainer from "../../../components/DialogContainer";

const LeadList = [
  {
    id: 1,
    title: "Leads from List(s)",
    desc: "Connect multiple lists as source for this sequence.",
    icon: <LuUserPlus2 size={38} />,
  },

  {
    id: 2,
    title: "Segment by Events",
    desc: "Create a segment of leads who have engaged with emails previously.",
    icon: <LuUserCheck2 size={38} />,
  },
  {
    id: 3,
    title: "Segment of List",
    desc: "Create a segment of leads which match SalesBlink Variables.",
    icon: <AiOutlineUserSwitch size={38} />,
  },
  {
    id: 4,
    title: "Lead from CRM Integration",
    desc: "Pulls leads from your CRM integrations.",
    icon: <IoFlash size={38} />,
  },
];

const AddLeadSource = ({ open, handleClose, handleSource }) => {

  return (
    <DialogContainer
      size="lg"
      handleClose={handleClose}
      open={open}
      overflow={true}
    >
      <div>
        <div>
          <h6 className="mb-1">Add a Source Block</h6>
          <p>
            Pick a block configure, any new leads that match rules will be added
            to sequence automatically.
          </p>
        </div>

        <div className="mt-5"></div>
        <h6 className="mb-1">Source</h6>
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2">
          {LeadList.map((el) =>
            el.id === 1 ? (
              <AddLeadCard onClick={handleSource} key={el.id} {...el} />
            ) : (
              <AddLeadCard key={el.id} {...el} />
            )
          )}
        </div>
      </div>
    </DialogContainer>
  );
};

const AddLeadCard = ({ onClick, title, icon, desc }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#fff]  items-center hover:bg-[#f9f9f9] cursor-pointer rounded-[5px] flex flex-row p-[20px] border border-solid  my-[10px] md:m-[10px]  transition duration-200 ease-in-out border-[#d7d7d7]"
    >
      <div className="flex justify-center items-center h-[60px] w-[60px] mr-[10px] bg-[#fbd6e5] text-[#ed317f] border-[#f484b2] p-[10px] rounded-[5px] border">
        {icon}
      </div>
      <div>
        <p className="text-[16px] md:text-[20px] font-semibold">{title}</p>
        <p className="m-0">{desc}</p>
      </div>
    </div>
  );
};

AddLeadSource.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSource: PropTypes.func,
};

export default AddLeadSource;
