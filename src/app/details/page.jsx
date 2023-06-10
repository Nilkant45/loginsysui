import { AiOutlineArrowLeft } from "react-icons/ai";
import React from "react";
// import { redirect } from 'next/navigation';
// export default async function Home({ params }) {
//   redirect('/');

// }

const page = () => {
  return (
    <div className="page__wrapper">
      <div className="content__div relative success__wrapper">
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

        {/* Main code */}
        <div className="back__btn__wrapper">
          <div className="round__green__btn">
            <AiOutlineArrowLeft size={30} className="arrow" />
          </div>
          <a href="/login">Back</a>
        </div>

        <div className="success__div details__div">
          <div>
            Name<p> Nilkant Gunjote</p>
          </div>
          <div>
            Email <p> test@gmail.com</p>
          </div>
          <div>
            Email Status<p> Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
