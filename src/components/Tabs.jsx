import React, { useState } from "react";

function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                href=""
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Tabs;
