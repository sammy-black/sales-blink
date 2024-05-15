import PropTypes from "prop-types";
import { LuUserPlus2 } from "react-icons/lu";

const LeadCard = ({ data: { label } }) => {
  return (
    <div className="shadow-sm w-fit nodrag flex flex-col items-center  text-center cursor-pointer rounded-[5px] border-[#D7D7D7] bg-[#F9F9F9] p-[10px]">
      <LuUserPlus2 size={38} />
      <p className="text-[14px] font-bold">Leads from</p>
      <p className="text-[14px] text-pink">{label}</p>
    </div>
  );
};

LeadCard.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
};

export default LeadCard;
