import { Loader } from "rsuite";
import PropTypes from "prop-types";

const Spinner = ({ size, speed }) => {
  return (
    <div className="flex h-full items-center justify-center">
      <Loader size={size ? size : "md"} speed={speed ? speed : "fast"} />
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  speed: PropTypes.string,
};

export default Spinner;
