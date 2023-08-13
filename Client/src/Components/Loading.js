import React from "react";

const Loading = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container py-48 mx-auto h-screen">
        <div
          className="mx-auto h-20 w-20 animate-spin rounded-full border-4 border-violet-500 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      </div>
    </section>
  );
};

export default Loading;
