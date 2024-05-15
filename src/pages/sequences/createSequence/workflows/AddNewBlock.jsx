import PropTypes from "prop-types";
import { IconButton, Tooltip, Whisper } from "rsuite";
import { AiOutlinePlus } from "react-icons/ai";
import { Position } from "reactflow";
import CustomHandle from "./CustomHandle";

const AddNewBlock = ({ data: { label } }) => {
  return (
    <Whisper placement="bottom"  speaker={<Tooltip style={{fontSize: "14px"}} >{label}</Tooltip>}>
      <div>
        <IconButton
          onClick={() => {
            console.log("Button clicked!");
          }}
          className="border-2 nodrag border-primary border-solid"
          color="red"
          icon={<AiOutlinePlus size={24} />}
        />

        <CustomHandle type="target" position={Position.Top} />
   
      </div>
    </Whisper>
  );
};

AddNewBlock.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
};

export default AddNewBlock;
