import React, { useState, useEffect } from "react";
import classnames from "classnames";

const NavBar = () => {
  const [toggleGps, setToggleGps] = useState(false);

  const handleToggleGps = () => setToggleGps(!toggleGps);

  const getLocation = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      var crd = pos.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
      console.log(
        `location : https://www.openstreetmap.org/#map=18/${crd.latitude}/${crd.longitude}`
      );
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return (
    <>
      <nav id="header" className="w-full z-30 top-10 py-1 pt-2">
        <div className="w-full flex items-center justify-between px-6 py-2">
          <div className="flex items-center">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
              className="w-28 mr-2 lg:mr-4"
            />
            <div
              className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1 lg:justify-start shadow-md bg-white "
              id="menu"
            >
              <div className="px-2 relative">
                <i className="fas fa-map-marker-alt mr-1 text-brand cursor-pointer" />
                <input
                  type="text"
                  name="userLocation"
                  id="userLocation"
                  placeholder="Bangalore"
                  className="lg:py-2 lg:px-6 focus:outline-none"
                />
                <i
                  className="fas fa-caret-down ml-1 border-r-2 border-gray-400 pr-3 cursor-pointer"
                  onClick={handleToggleGps}
                />
                <div
                  className={classnames(
                    "absolute bg-white rounded p-3 flex items-center justify-between shadow-xl",
                    { hidden: !toggleGps, block: toggleGps }
                  )}
                >
                  <div className="px-3">
                    <i className="fas fa-crosshairs text-brand"></i>
                  </div>
                  <div className="px-3 cursor-pointer" onClick={getLocation}>
                    <h1 className="font-medium text-brand">
                      Detect current location
                    </h1>
                    <small className="font-normal text-gray-400">
                      Using GPS
                    </small>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <i className="fas fa-search mr-1 text-gray-400" />
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search for restaurant, cuisine or a dish"
                  size="25"
                  className="lg:py-2 lg:px-6 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div
            className="order-2  md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
            id="nav-content"
          >
            <div className="lg:hidden border rounded-full py-2 px-3 border-brand">
              <i className="fas fa-user text-brand"></i>
            </div>
            <div className="auth flex items-center w-full hidden lg:block lg:w-full">
              <button className="bg-transparent text-gray-800 font-semibold	 p-2 rounded  mr-4 hover:bg-gray-100 hover:text-gray-700 focus:outline-none ">
                Sign in
              </button>
              <button className=" border border-brand text-brand font-semibold	 py-1 px-3 rounded  hover:bg-brand hover:text-gray-200 focus:outline-none ">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
