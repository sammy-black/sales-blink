import React from "react";
import PropTypes from "prop-types";
import { Button } from "rsuite";
import { FaPlus } from "react-icons/fa6";
import SequenceTable from "./SequenceTable";
import { useNavigate } from "react-router-dom";

const Sequences = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h6>Outreach Sequences</h6>
      <div className="flex flex-col sm:flex-row  justify-between">
        <p className="mt-2">
          Create/Manage your sequences with automated emails & timely tasks.
        </p>
        <Button
          onClick={() => navigate("/sequences/create")}
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
