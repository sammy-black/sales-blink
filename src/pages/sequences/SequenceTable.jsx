import React from "react";
import PropTypes from "prop-types";
import { Dropdown, IconButton, Popover, Table, Tooltip, Whisper } from "rsuite";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLinksLine } from "react-icons/ri";
import { TbMessageReply } from "react-icons/tb";
import { FaRegEdit, FaStar } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { LuArchiveRestore } from "react-icons/lu";

const { Column, HeaderCell, Cell } = Table;

const iconStyle = { backgroundColor: "transparent", padding: 0 };

const PerformanceButton = ({ icon, tooltipTitle, value }) => (
  <Whisper placement="top" speaker={<Tooltip>{tooltipTitle}</Tooltip>}>
    <div className="flex flex-row h-full items-center space-x-1">
      {icon}
      <p className="text-[12px] font-semibold">{value}</p>
    </div>
  </Whisper>
);
const PerformanceCell = ({ rowData, dataKey, ...props }) => {
  const { sent, opens, clicks, replies } = rowData?.performance;

  return (
    <Cell {...props} style={{ padding: 0 }}>
      <div className="flex flex-row space-x-2 h-full">
        <PerformanceButton
          icon={<MdOutlineMarkEmailRead size={14} />}
          tooltipTitle="Sent"
          value={sent}
        />
        <PerformanceButton
          icon={<HiOutlineMailOpen size={14} />}
          tooltipTitle="Opens"
          value={opens}
        />
        <PerformanceButton
          icon={<RiLinksLine size={14} />}
          tooltipTitle="Clicks"
          value={clicks}
        />
        <PerformanceButton
          icon={<TbMessageReply size={14} />}
          tooltipTitle="Replies"
          value={replies}
        />
      </div>
    </Cell>
  );
};
const renderMenu = ({ onClose, left, top, className }, ref) => {
  const handleSelect = (eventKey) => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item icon={<FaRegEdit />} eventKey={1}>
          Edit
        </Dropdown.Item>
        <Dropdown.Item icon={<FaStar />}>Star</Dropdown.Item>
        <Dropdown.Item icon={<BiDetail />}>Details</Dropdown.Item>
        <Dropdown.Item icon={<LuArchiveRestore />} eventKey={5}>
          Archive
        </Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const ActionCell = ({ rowData, dataKey, ...props }) => {
  return (
    <Cell {...props} className="link-group">
      <Whisper placement="autoVerticalEnd" trigger="click" speaker={renderMenu}>
        <IconButton
          style={{
            height: "100%",
            padding: 0,
            borderRadius: 0,
            backgroundColor: "transparent",
          }}
          appearance="subtle"
          icon={<BsThreeDots size={20} />}
        />
      </Whisper>
    </Cell>
  );
};

const SequenceTable = ({ data }) => {
  return (
    <>
      <Table data={data}>
        <Column flexGrow={1}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
        </Column>

        <Column width={230}>
          <HeaderCell>Performance</HeaderCell>
          <PerformanceCell dataKey="performance" />
        </Column>
        <Column width={80}>
          <HeaderCell>Actions</HeaderCell>
          <ActionCell dataKey="id" />
        </Column>
      </Table>
    </>
  );
};

SequenceTable.propTypes = {};

export default SequenceTable;
