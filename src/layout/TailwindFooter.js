import React from "react";
import FooterLeftContent from "../components/FooterLeftContent";
import FooterRightContent from "../components/FooterRightContent";

const TailwindFooter = () => {
  return (
    <footer aria-label="Site Footer" className="bg-white">
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FooterLeftContent />
          <FooterRightContent />
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default TailwindFooter;
