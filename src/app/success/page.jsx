"use client";
import { useEffect } from "react";

const SuccessPage = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      console.log("called");
      window.location.href = "/login";
    }, 2000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="page__wrapper">
      <div className="content_div relative success_wrapper">
        {/* Blobs */}
        <div className="blob1 absolute"></div>
        <div className="blob2 absolute"></div>
        <div className="blob3 absolute"></div>
        <div className="blob3 absolute"></div>
        <div className="blob3 absolute"></div>
        <div className="blob3 absolute"></div>
        <div className="blob3 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>
        <div className="blob4 absolute"></div>

        {/* Main code */}
        <div className="success__div">
          <h4>Successful</h4>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;