import React from "react";
import { useContext, useState } from "react";
import { logContext } from "../contexts/logStatus";
import { getAuth, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import "../styles/app.css";

// eslint-disable-next-line react/prop-types
const NavBar = ({ setCreate }) => {
  const auth = getAuth();
  const [, setValue] = useContext(logContext); //is it logged in?
  const [isOpen, setIsOpen] = useState(false); //open create modal?

  const handleLogOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setValue(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(value);

  return (
    <div className="z-20 bg-white border-t-2 fixed bottom-0 inset-x-0 w-full flex flex-wrap justify-items-stretch md:block md:left-0 md:inset-y-0 md:w-16 xl:w-[244px] h-[48px] md:h-screen border-solid md:border-r-2 md:border-y-0">
      <div className="w-full h-48 flex flex-wrap justify-items-center md:block md:h-screen md:w-12 xl:w-[244px]">
        <div className="h-48 md:h-[692px] w-full md:w-12 xl:w-[244px] flex flex-wrap md:p-2 border-hidden border-[1px] border-gray-300">
          <div className="hidden md:flex h-18-24 w-12 xl:w-[220px] mb-[19.04px] pb-4 pl-3 pt-[24.96px] border-hidden border-[1px] border-gray-300">
            <div className="hidden xl:flex flex-wrap items-center justify-center border-hidden border-[1px] w-[102.4px] h-7">
              <img src="/images/nav_logos/logo.png" className="mt-2 mb-2"></img>
            </div>
            <div className="w-8 h-7 xl:hidden">
              <img src="/images/nav_logos/ig.png" />
            </div>
          </div>

          <nav className="w-full h-48 flex flex-wrap justify-around md:block md:w-12 xl:w-[220px] md:h-[620px] border-hidden border-[1px] border-gray-300">
            <NavLink to="/">
              <div
                className="md:hover:bg-gray-100 md:h-12 md:w-12 xl:w-[220px] md:rounded-full"
                href="/"
              >
                <div className="flex flex-wrap items-center justify-center h-12 md:w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 md:my-2 md:p-3">
                  <div className="flex items-center h-6 md:w-full">
                    <div className="flex flex-wrap items-center w-6 h-6 xl:mr-4">
                      <img src="/images/nav_logos/home.png" />
                    </div>
                    <div className="hidden xl:flex h-6">Home</div>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink>
              <div
                className="hidden md:block md:hover:bg-gray-100 md:h-12 md:w-12 xl:w-[220px] md:rounded-full"
                href="/search"
              >
                <div className="flex flex-wrap items-center h-12 md:w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 md:my-2 md:p-3">
                  <div className="flex items-center h-6 md:w-full">
                    <div className="w-6 h-6 xl:mr-4">
                      <img src="/images/nav_logos/search.png" />
                    </div>
                    <div className="hidden xl:flex h-6">Search</div>
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/explore">
              <div
                className="md:hover:bg-gray-100 h-12 md:w-12 xl:w-[220px] md:rounded-full"
                href="/explore"
              >
                <div className="flex flex-wrap items-center h-12 md:w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 md:my-2 md:p-3">
                  <div className="flex items-center h-6 md:w-full">
                    <div className="w-6 h-6 xl:mr-4">
                      <img src="/images/nav_logos/explore.png" />
                    </div>
                    <div className="hidden xl:flex h-6">Explore</div>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/reels">
              <div
                className="md:hover:bg-gray-100 h-12 md:w-12 xl:w-[220px] md:rounded-full"
                href="/reels"
              >
                <div className="flex flex-wrap items-center h-12 md:w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 md:my-2 md:p-3">
                  <div className="flex items-center h-6 md:w-full">
                    <div className="w-6 h-6 xl:mr-4">
                      <img src="/images/nav_logos/reels.png" />
                    </div>
                    <div className="hidden xl:flex h-6">Reels</div>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/messages">
              <div
                className="md:hover:bg-gray-100 h-12 md:w-12 xl:w-[220px] md:rounded-full"
                href="/messages"
              >
                <div className="flex flex-wrap items-center h-12 md:w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 md:my-2 md:p-3">
                  <div className="flex items-center h-6 md:w-full">
                    <div className="w-6 h-6 xl:mr-4">
                      <img src="/images/nav_logos/messages.png" />
                    </div>
                    <div className="hidden xl:flex h-6">Messages</div>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink>
              <div
                className="hidden md:block md:hover:bg-gray-100 h-12 md:w-12 xl:w-[220px] md:rounded-full"
                href="/notifications"
              >
                <div className="flex flex-wrap items-center h-12 md:w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 md:my-2 md:p-3">
                  <div className="flex items-center h-6 md:w-full">
                    <div className="w-6 h-6 xl:mr-4">
                      <img src="/images/nav_logos/notifications.png" />
                    </div>
                    <div className="hidden xl:flex h-6">Notifications</div>
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink>
              <div
                className="md:hover:bg-gray-100 h-12 md:w-12 xl:w-[220px] md:rounded-full"
                href="#"
                onClick={setCreate}
              >
                <div className="flex flex-wrap items-center h-12 md:w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 md:my-2 md:p-3">
                  <div className="flex items-center h-6 md:w-full">
                    <div className="w-6 h-6 xl:mr-4">
                      <img src="/images/nav_logos/create.png" />
                    </div>
                    <div className="hidden xl:flex h-6">Create</div>
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/profile">
              <div
                className="md:hover:bg-gray-100 h-12 md:w-12 xl:w-[220px] md:rounded-full"
                href="/profile"
              >
                <div className="flex flex-wrap items-center h-12 md:w-12 xl:w-[220px] border-hidden border-[1px] border-gray-300 md:my-2 md:p-3">
                  <div className="flex items-center h-6 md:w-full">
                    <div className="w-6 h-6 xl:mr-4">
                      <img />
                    </div>
                    <div className="hidden xl:flex h-6">Profile</div>
                  </div>
                </div>
              </div>
            </NavLink>
          </nav>

          <div
            className="hidden md:flex relative hover:bg-gray-100 rounded-full items-center w-12 xl:w-[220px] h-12 border-hidden border-[1px] border-gray-300 my-1 p-3"
            href="#"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="md:flex w-6 h-6 xl:mr-4">
              <img src="/images/nav_logos/more.png" />
            </div>
            <div className="hidden xl:flex h-6">More</div>
            {isOpen && (
              <div className="absolute -top-[320px] w-[250px] -ml-[2px] h-[400] bg-white grid grid-rows-6 justify-items-center place-content-evenly">
                <div className="w-[250px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                  Settings
                </div>
                <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                  Saved
                </div>
                <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                  Switch appearance
                </div>
                <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                  Your activity
                </div>
                <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                  Report a problem
                </div>
                <div className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle">
                  Switch accounts
                </div>
                <div
                  className="w-[270px] h-[44px] border-solid border-[1px] pl-2 border-gray-300 align-middle"
                  onClick={handleLogOut}
                >
                  Log out
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
