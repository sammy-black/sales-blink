import React from "react";
import PropTypes from "prop-types";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  Button,
  ButtonGroup,
  Dropdown,
  IconButton,
  Popover,
  Whisper,
} from "rsuite";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoRocketOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import SequenceFlow from "./SequenceFlow";

const CreateSequence = () => {
  const navigate = useNavigate();
  const sequenceForm = useSelector((state) => state.sequence.sequenceForm);
  return (
    <div className="h-full w-full">
      <div className="flex flex-row">
        <Button
          onClick={() => navigate(-1)}
          size="sm"
          startIcon={<IoIosArrowRoundBack size={30} />}
        >
          Back{" "}
        </Button>
      </div>
      <div className="mt-7 flex flex-col sm:flex-row justify-between">
        <div>
          <h6>{sequenceForm?.name}</h6>
          <p className="mt-2">
            Click on a block to configure and add it in sequence.
          </p>
        </div>
        <div className="max-sm:mt-3">
          <ButtonGroup>
            <Button
              appearance="primary"
              startIcon={<IoRocketOutline size={16}/>}
            >
              Save & Schedule
            </Button>
            <Whisper
              placement="bottomEnd"
              trigger="click"
              speaker={({ onClose, left, top, className }, ref) => {
                const handleSelect = (eventKey) => {
                  onClose();
                  // setAction(eventKey);
                  console.log(eventKey);
                };
                return (
                  <Popover
                    ref={ref}
                    className={className}
                    style={{ left, top }}
                    full
                  >
                    <Dropdown.Menu onSelect={handleSelect}>
                      <Dropdown.Item>Save as Paused</Dropdown.Item>
                    </Dropdown.Menu>
                  </Popover>
                );
              }}
            >
              <IconButton  appearance="primary" icon={<IoIosArrowDown size={16} />} />
            </Whisper>
          </ButtonGroup>
        </div>
      </div>

      {/* // sequence flow charts */}
      <div className="mt-4 px-[10px] md:px-[20px]">

     
      <div className="border border-[#E6E6E6] rounded-[6px] bg-[#f2f2f2]"> 
          <SequenceFlow />
      </div>
      </div>

    </div>
  );
};

CreateSequence.propTypes = {};

export default CreateSequence;
