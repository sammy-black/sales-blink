import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, TagPicker } from "rsuite";
import { PiPlus } from "react-icons/pi";

import DialogContainer from "../../../components/DialogContainer";
import { useReactFlow } from "reactflow";

const LeadList = ({ open, handleClose, setNodes, setEdges }) => {
  const [value, setValue] = useState(null);

  console.log(value);

  const handleInsertLead = () => {
   
    setNodes((prevNodes) => [
      {
        id: `${prevNodes.length + 1}`,
        data: { label: "Hello" },
        type: "Leads",
        position: { x: 100 },
    
      },
      ...prevNodes,
    ]);
    handleClose();
  };

  return (
    <DialogContainer
      size="md"
      handleClose={handleClose}
      open={open}
      overflow={true}
    >
      <div>
        <div>
          <h6 className="mb-1">Leads from List(s)</h6>
          <p>Connect multiple lists as source for this sequence.</p>
        </div>

        <div className="mt-5"></div>
        <div className="flex flex-row justify-between items-end">
          <p className="mb-1 text-[14px]  md:text-[20px]">
            Select your List(s)
          </p>
          <Button
            className="border-primary"
            appearance="ghost"
            endIcon={<PiPlus />}
          >
            New List
          </Button>
        </div>

        <div className="mt-4">
          <TagPicker
            placeholder="Select from lists"
            block
            labelKey="title"
            valueKey="id"
            value={value}
            onChange={setValue}
            size="lg"
            data={EmailLeads}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-end">
        {value && value.length > 0 && (
          <Button
            onClick={handleInsertLead}
            style={{
              color: "white",
              fontSize: "16px",
            }}
            className="bg-primary"
          >
            Insert
          </Button>
        )}
      </div>
    </DialogContainer>
  );
};

LeadList.propTypes = {};

export default LeadList;

const EmailLeads = [
  {
    id: 1,
    title: "Special Offer for Subscribers",
    userEmails: ["subscriber1@example.com", "subscriber2@example.com"],
    body: "Dear subscribers, we have an exclusive offer just for you! Don't miss out on this opportunity.",
    subject: "Exclusive Offer Inside",
    time: "2024-05-15 10:00:00",
  },
  {
    id: 2,
    title: "Webinar Invitation",
    userEmails: ["user3@example.com", "user4@example.com", "user5@example.com"],
    body: "Hello everyone, we're excited to invite you to our upcoming webinar on the latest industry trends.",
    subject: "Join Our Webinar",
    time: "2024-05-15 12:30:00",
  },
  {
    id: 3,
    title: "Important Announcement",
    userEmails: ["user6@example.com"],
    body: "Dear valued customer, we have an important announcement regarding changes to our service. Please read on for more information.",
    subject: "Service Update",
    time: "2024-05-15 14:45:00",
  },
  {
    id: 4,
    title: "Product Feedback Request",
    userEmails: ["user7@example.com", "user8@example.com", "user9@example.com"],
    body: "Hi there, we'd love to hear your thoughts on our latest product. Please take a moment to provide your feedback.",
    subject: "Your Opinion Matters",
    time: "2024-05-15 16:00:00",
  },
  {
    id: 5,
    title: "Holiday Greetings",
    userEmails: ["user10@example.com"],
    body: "Season's greetings to all our customers! Wishing you joy and happiness this holiday season.",
    subject: "Happy Holidays",
    time: "2024-05-15 18:00:00",
  },
];
