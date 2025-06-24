import React from "react";
import Bento from "./components/bento";

const App = () => {
  return (
    <div className="flex min-h-screen bg-black justify-center font-inter">
      <div className="h-screen overflow-y-scroll hide-scrollbar scroll-smooth py-10 w-full sm:w-8/12 md:w-2/3 lg:w-[80%] xl:w-[65%] mx-6 sm:mx-0">
        <Bento />
      </div>
    </div>
  );
};

export default App;
