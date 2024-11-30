import React from "react";
function Header() {
  return (
    <div>
      <div className="bg-blue-500 text-white text-center p-5">
        Our free WordPress themes are downloaded over 5 MILLION times.
        <span className="text-slate-400">Get them now!</span>
      </div>
      <div className="sticky top-0 z-50 shadow flex cursor-pointer bg-slate-100 p-2">
        <div>
          <img
            className="sm:ml-10 lg:ml-20 lg:mr-44 w-40 lg:mt-14 sm:mt-10"
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-logo-top.png.webp"
            alt="Logo"
          />
        </div>
        <div className="hidden lg:block lg:ml-14 lg:mt-14 ">
          <span className="lg:ml-10 hover:text-blue-500  ">Home</span>
          <span className="lg:ml-10 hover:text-blue-500 ">Support</span>
          <span className="lg:ml-10 hover:text-blue-500 ">Free Themes</span>
          <span className="lg:ml-10 hover:text-blue-500 ">Premium Themes</span>
          <span className="lg:ml-10 hover:text-blue-500 ">
            Website Templates
          </span>
          <span className="lg:ml-10 hover:text-blue-500 ">Blog</span>
          <span className="lg:ml-10 hover:text-blue-500 ">Account</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
