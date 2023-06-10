import React from "react";

const page = () => {
  return (
    <div className="page__wrapper">
      <div className="content__div relative">
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
        <div className="left__div">
          <div className="form__wrapper">
            <form action="">
              <input type="number" placeholder="Enter Otp" />
              {/* <input type="email" placeholder="Email" /> */}
              <a href="/details" className="hero__btn">
                Validate OTP
              </a>
            </form>
          </div>
        </div>

        <div className="right__div">
          <div className="right__heading">
            {/* <span>Have an account?</span>
            <a href="">Sign In</a> */}
          </div>

          <div className="login__info">
            <h4 className="green__text">Validate Your OTP!</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quis impedit voluptatibus provident quidem voluptatem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
