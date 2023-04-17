import React from "react";
import TopNavbar from "../layout/TopNavbar";
import TailwindFooter from "../layout/TailwindFooter";
import Banner from "../layout/Banner";
import CardLayout from "../layout/CardLayout";
import SignUp from "../components/SignUp";
import Faq from "../components/Faq";
import ContentOverlayBg from "../components/ContentOverlayBg";
import FormWithContent from "../components/FormWithContent";
import UncontroledForm from "../components/UncontroledForm";

const MultiSection = () => {
  return (
    <>
      <TopNavbar />
      <Banner />
      <div className="max-w-screen-xl py-5 mx-auto px-7">
        <ContentOverlayBg />
        <CardLayout />
        <Faq />
      </div>
      <FormWithContent />
      <UncontroledForm />
      <SignUp />
      <TailwindFooter />
    </>
  );
};

export default MultiSection;
