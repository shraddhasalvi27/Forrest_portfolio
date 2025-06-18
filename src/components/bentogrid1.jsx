import React from "react";

const BentoGrid1 = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-6 min-h-screen">
      
      {/* Left 5-column section */}
      <div className="col-span-5 flex flex-col gap-4">
        {/* Info Bar */}
        <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center">
          info
        </div>

        {/* 3-column nested grid */}
        <div className="grid grid-cols-3 gap-4 flex-1">
          
          {/* Column 1: time + project card */}
          <div className="flex flex-col gap-4 grid-cols-1">
            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center">
              time
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex-1 flex items-center justify-center">
              project card
            </div>
          </div>

          {/* Column 2: photo + contact block */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center">
              photo
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-4 flex-1">
              <div className="bg-gray-100 rounded-xl flex-1 flex items-center justify-center">
                photo
              </div>
              <div className="bg-gray-200 rounded-xl flex-1 flex items-center justify-center">
                contact form
              </div>
            </div>
          </div>

          {/* Column 3: links column */}
          <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center">
            links
          </div>
        </div>
      </div>

      {/* Right side: tech stack */}
      <div className="bg-white rounded-xl shadow p-4 flex items-center justify-center row-span-full col-start-6">
        tech stack
      </div>
    </div>
  );
};

export default BentoGrid1;
