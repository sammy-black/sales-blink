import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import ReactFlow, {
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
import { AddLeadSource, AddNewBlock, LeadCard } from "./workflows";
import { AddLeadSourceModal, LeadListModal } from "../modals";

const nodeTypes = {
  AddLeadSource: AddLeadSource,
  AddNewBlock: AddNewBlock,
  Leads: LeadCard,
};

const initialNodes = [
  {
    id: "standalone",
    position: { x: 100, y: 20 },
    data: { label: "Add Another Source" },
    type: "AddLeadSource",
  },

  {
    id: "2",
    position: { x: 100, y: 150 },
    className:
      "nodrag shadow-sm w-[250px] rounded-[5px] border-[#D7D7D7] bg-[#F9F9F9] p-[10px]",
    data: { label: <span className="text-lg">Sequence Start Point</span> },
  },
  {
    id: "3",
    position: { x: 201, y: 230 },
    className:
      "border-none  rounded-md bg-transparent w-fit p-0 focus:border-none",
    data: {
      label: "Add New Block",
    },
    type: "AddNewBlock",
  },
];
const initialEdges = [
  { id: "2-3", source: "2", target: "3", type: "straight" },
];

const SequenceFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [showAddSource, setShowAddSource] = useState(false);
  const [showLeadList, setShowLeadList] = useState(false);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const handleNodeClick = (id) => {
    const newId = id.toString();
    if (newId === "3") {
      return;
    } else if (id.toString() === "standalone") {
      setShowAddSource(true);
    }
  };

  const handleSource = () => {
    setShowAddSource(false);
    setShowLeadList(true);
  };

  const handleInsertLead = () => {};

  return (
    <>
      <div className="h-[50vh] md:h-[60vh]" style={{ width: "100%" }}>
        <ReactFlow
          connectOnClick={() => {}}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={(e, node) => handleNodeClick(node.id)}
          fitView
        >
          <Controls />
          {/* <MiniMap /> */}
        </ReactFlow>
      </div>
      {showAddSource && (
        <AddLeadSourceModal
          open={showAddSource}
          handleSource={handleSource}
          handleClose={() => setShowAddSource(false)}
        />
      )}
      {showLeadList && (
        <LeadListModal
          open={showLeadList}
          handleClose={() => setShowLeadList(false)}
          setNodes={setNodes}
          setEdges={setEdges}
        />
      )}
    </>
  );
};

SequenceFlow.propTypes = {};

export default SequenceFlow;
