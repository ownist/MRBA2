const TicketsStatus = () => {
  return (
    <>
      <div className="hidden lg:grid lg:col-span-4">
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-slate-700 text-2xl font-semibold">
              Task Status
            </h1>

            <p className="text-gray-500 text-base font-normal">
              Select a ticket to add to Task Status
            </p>

            {/* <div className="bg-white rounded shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
              <div className="p-4 space-y-4">
                <h1 className="text-slate-900 text-lg font-medium">
                  Payment Failed - Card Declined
                </h1>
                <button className="w-full text-white text-base font-semibold px-4 py-3 bg-green-600 rounded duration-200 hover:bg-green-700">
                  Complete
                </button>
              </div>
            </div> */}
            
            {/*  */}
          </div>

          <div className="space-y-4">
            <h1 className="text-slate-700 text-2xl font-semibold">
              Resolved Task
            </h1>

            <p className="text-gray-500 text-base font-normal">
              No resolved tasks yet.
            </p>

            {/* <div className="">
              <h1 className="text-slate-900 text-lg font-medium px-4 py-5 bg-indigo-100 rounded shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]">
                Incorrect Billing Address
              </h1>
            </div> */}

            {/*  */}
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default TicketsStatus;
