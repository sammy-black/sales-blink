import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip, Whisper } from "rsuite";

const AddLeadSource = ({ data: { label } }) => {
  return (
    <Whisper placement="bottom"  speaker={<Tooltip  style={{fontSize: "14px"}}>{label}</Tooltip>}>
    <div className="shadow-sm w-fit nodrag flex flex-col items-center  text-center cursor-pointer rounded-[5px] border-[#D7D7D7] bg-[#F9F9F9] p-[10px]">
      <AiOutlinePlus size={24} />
      <p className="text-[14px]">{label}</p>
      <p className="text-[12px]">Click to add leads from List or CRM</p>
    </div>
    </Whisper>
  );
};

AddLeadSource.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
};

export default AddLeadSource;
