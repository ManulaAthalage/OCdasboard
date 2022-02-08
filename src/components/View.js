// + add the useEffect import

import BpOcActionlComponent from "./BpOCActionlComponent";
import BpAppSupportComponent from "./BpAppSupportComponent";
import BpAs400UnComponent from "./BpAs400UnComponent";

function View() {
  return (
    <div className="container-fluid">
      <div className="row p-2">
        <BpOcActionlComponent />
        <BpAppSupportComponent />
        <BpAs400UnComponent />
      </div>
    </div>
  );
}

export default View;
