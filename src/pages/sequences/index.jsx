import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "rsuite";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import SequenceTable from "./SequenceTable";
import DialogContainer from "../../components/DialogContainer";
import { setSequenceForm } from "../../redux/slice/sequence";

const CreateSequenceModal = ({
  open,
  handleCreateSequence,
  value,
  onChange,
  handleClose,
}) => (
  <DialogContainer
    open={open}
    title={"Create a Sequence from Scratch"}
    overflow={true}
    handleClose={handleClose}
    actionButtons={
      <>
        <Button onClick={handleClose} color="red" appearance="primary">
          Cancel
        </Button>
        <Button
          className="bg-primary"
          onClick={handleCreateSequence}
          appearance="primary"
        >
          Create Sequence
        </Button>
      </>
    }
  >
    <Input
      value={value}
      size="lg"
      onChange={onChange}
      placeholder="Enter a name for your sequence"
    />
  </DialogContainer>
);
const Sequences = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openSequence, setOpenSequence] = useState(false);
  const [sequenceName, setSequenceName] = useState("");

  const handleCreateSequence = () => {
    dispatch(setSequenceForm({ name: sequenceName }));
    navigate("/sequences/create");
  };
  return (
    <>
      <div>
        <h6>Outreach Sequences</h6>
        <div className="flex flex-col sm:flex-row  justify-between">
          <p className="mt-2">
            Create/Manage your sequences with automated emails & timely tasks.
          </p>
          <Button
            onClick={() => setOpenSequence(true)}
            endIcon={<FaPlus />}
            className=" bg-primary text-white max-sm:mt-3"
          >
            Create New Sequence
          </Button>
        </div>

        <div className="mt-6">
          <SequenceTable data={dataList} />
        </div>
      </div>
      <CreateSequenceModal
        open={openSequence}
        value={sequenceName}
        onChange={setSequenceName}
        handleClose={() => setOpenSequence(false)}
        handleCreateSequence={handleCreateSequence}
      />
    </>
  );
};

Sequences.propTypes = {};

export default Sequences;

const dataList = [
  {
    name: "Campaign 1",
    status: "Active",
    "Scheduled Time": "2024-05-15T08:00:00",
    performance: {
      sent: 1000,
      opens: 500,
      clicks: 200,
      replies: 50,
    },
  },
  {
    name: "Campaign 2",
    status: "Paused",
    "Scheduled Time": "2024-05-16T10:00:00",
    performance: {
      sent: 1500,
      opens: 700,
      clicks: 250,
      replies: 70,
    },
  },
  {
    name: "Campaign 3",
    status: "Completed",
    "Scheduled Time": "2024-05-17T12:00:00",
    performance: {
      sent: 2000,
      opens: 900,
      clicks: 300,
      replies: 100,
    },
  },
];
