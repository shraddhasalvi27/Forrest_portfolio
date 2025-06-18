import React from "react";
import BentoGrid from "./components/bentogrid";

const App = () => {
  return (
    <div className="flex min-h-screen bg-black justify-center">
      <div className=" h-screen overflow-y-scroll hide-scrollbar scroll-smooth pt-10 w-[70%]">

        <BentoGrid/>
      </div>
    </div>
  );
};

export default App;
