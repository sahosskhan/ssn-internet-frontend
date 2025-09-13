import React from "react";

const NoticeBar = () => {
  return (
    <div className="w-full text-white bg-red-500 py-2 overflow-hidden">
      <div className="container mx-auto pt-6 md:pt-2 lg:pt-3 xl:pt-4 px-4  animate-marquee">
        <div className="flex  items-center space-x-2 whitespace-nowrap">
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 animate-pulse h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
      

          {/* Text */}
          <p className="text-sm sm:text-base md:text-lg">
            <span className="bg-white  px-2 py-1 rounded-lg font-semibold text-black">
              Notice:
            </span>{" "}
            Please Pay September Month Internet Bill Within 15 September, 2025.
            During Electricity Issue Network Can Be Down For Few Moments In This
            Week.🚧Website Under Construction.🚧
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticeBar;
