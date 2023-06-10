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
          {/* <div className="progress__wrapper relative">
            <div className="progress__line"></div>
            <div className="progress__circle1 relative">
              <span className="absolute">OTP</span>
            </div>
            <div className="progress__circle2 relative ">
              <span className="absolute" id="validate-span">
                Validate
              </span>
            </div>
            <div className="progress__circle3 relative">
              <span className="absolute">SignIn</span>
            </div>

          </div> */}

          <div className="form__wrapper">
            <form action="">
              {/* <input type="text" placeholder="Name" /> */}
              <input type="email" placeholder="Email" />
              <a href="/validateLogin?send-otp" className="hero__btn">
                Get OTP
              </a>
            </form>
          </div>
        </div>

        <div className="right__div">
          <div className="right__heading">
            <span>Don't have an account?</span>
            <a href="/">Sign Up</a>
          </div>

          <div className="login__info">
            <h4 className="green__text">Login</h4>
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
