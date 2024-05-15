import { Handle } from "reactflow";

const CustomHandle = (props) => {
  return (
    <Handle
      style={{
        width: 6,
        height: 6,
        background: "#d7d7d7 ",
        borderRadius: 8,
        border: "2px solid #d7d7d766",
      }}
      {...props}
    />
  );
};

export default CustomHandle;
