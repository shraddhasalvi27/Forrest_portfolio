import React from "react";
import BentoGrid from "./components/bentogrid";
import Bento from "./components/bento";

const App = () => {
  return (
    <div className="flex min-h-screen bg-black justify-center font-inter ">
      <div className=" h-screen overflow-y-scroll hide-scrollbar scroll-smooth pt-10 w-[60%]">

        <Bento/>
      </div>
    </div>
  );
};

export default App;
