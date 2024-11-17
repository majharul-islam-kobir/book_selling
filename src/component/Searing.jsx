import { useState } from "react";
import SidePanel from "./SidePanel";
import MenuBar from "./MenuBar";

function Searing() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <SidePanel isOpen={isOpen} toggleSidePanel={toggleSidePanel} />
      <MenuBar isOpen={isOpen} toggleSidePanel={toggleSidePanel} />
    </div>
  );
}

export default Searing;
