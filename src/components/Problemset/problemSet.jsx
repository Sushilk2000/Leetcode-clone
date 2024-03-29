import { Link } from "react-router-dom";
import { data } from "../../Data/ProblemData";
import { useState } from "react";
import Header from "../Header/header";
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import Youtube from "react-youtube";
import { Tuple } from "@reduxjs/toolkit";

const ProblemSet = () => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });
  function handleYoutube(e) {
    setYoutubePlayer({
      isOpen: true,
      videoId: e,
    });
  }
  const [myData, setMyData] = useState(data);
  return (
    <>
      <Header problempage={false}></Header>
      <div className="flex border items-center flex-col h-[93.5vh] bg-gray-100 pt-8">
        <div className="font-bold text-5xl font-serif mb-12 mt-8">
          Problem Set
        </div>
        <div className="w-2/3 h-full border pl-4 pr-4">
          <div className="w-full flex px-4 text-xl font-bold">
            <div className="w-2/5">STATUS</div>
            <div className="w-full">NAME</div>
            <div className="w-2/5">DIFFICULTY</div>
            <div className="w-2/5">ACCEPTANCE</div>
            <div className="w-2/5">SOLUTION</div>
          </div>
          {myData.map((problem, index) => (
            <div className="w-full flex px-4" key={index}>
              {index % 2 == 1 ? (
                <div className="bg-gray-300 py-2 w-full flex h-full">
                  <div className="w-2/5 font-semibold pl-2">
                    {localStorage.getItem(`status_${problem.id}`) == "yes" ? (
                      <BsCheckCircle
                        color="blue"
                        fontSize={"18"}
                        width={"18"}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="w-full pl-2">
                    <div className="max-w-max">
                      <Link
                        to={`/problems/${index}/${problem.id}`}
                        className="w-full"
                      >
                        <div className="w-full hover:link hover:text-blue-600 font-semibold">
                          {problem.title}
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="w-2/5 font-semibold pl-2">
                    {problem.difficulty === "Easy" && (
                      <p className="w-full text-green-500 ">
                        {problem.difficulty}
                      </p>
                    )}
                    {problem.difficulty === "Medium" && (
                      <p className="w-full text-yellow-500">
                        {problem.difficulty}
                      </p>
                    )}
                    {problem.difficulty === "Hard" && (
                      <p className="w-full text-red-500">
                        {problem.difficulty}
                      </p>
                    )}
                  </div>
                  <div className="w-2/5 pl-2 font-semibold">
                    {problem.category}
                  </div>
                  <div className="w-2/5 font-semibold pl-2">
                    {problem.videoId ? (
                      <p>
                        {
                          <AiFillYoutube
                            size={28}
                            className="hover:text-red-600 cursor-pointer"
                            onClick={() => {
                              handleYoutube(problem.videoId);
                            }}
                          />
                        }
                      </p>
                    ) : (
                      <p className="text-gray-600 ">coming soon</p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="w-full flex h-full py-2">
                  <div className="w-2/5 font-semibold pl-2">
                    {localStorage.getItem(`status_${problem.id}`) == "yes" ? (
                      <BsCheckCircle
                        color="blue"
                        fontSize={"18"}
                        width={"18"}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="w-full pl-2">
                    <div className="max-w-max">
                      <Link
                        to={`/problems/${index}/${problem.id}`}
                        className="w-full"
                      >
                        <div className="w-full hover:link hover:text-blue-600 font-semibold">
                          {problem.title}
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="w-2/5 font-semibold pl-2">
                    {problem.difficulty === "Easy" && (
                      <p className="w-full text-green-500 ">
                        {problem.difficulty}
                      </p>
                    )}
                    {problem.difficulty === "Medium" && (
                      <p className="w-full text-yellow-500">
                        {problem.difficulty}
                      </p>
                    )}
                    {problem.difficulty === "Hard" && (
                      <p className="w-full text-red-500">
                        {problem.difficulty}
                      </p>
                    )}
                  </div>
                  <div className="w-2/5 pl-2 font-semibold">
                    {problem.category}
                  </div>
                  <div className="w-2/5 font-semibold pl-2">
                    {problem.videoId ? (
                      <p>
                        {
                          <AiFillYoutube
                            size={28}
                            className="hover:text-red-600 cursor-pointer"
                            onClick={() => {
                              handleYoutube(problem.videoId);
                            }}
                          />
                        }
                      </p>
                    ) : (
                      <p className="text-gray-600 ">coming soon</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {youtubePlayer.isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
          <div className="bg-black z-10 opacity-90 top-0 left-0 w-screen h-screen absolute"></div>
          <div className="w-full z-50 h-full px-6 relative max-w-4xl">
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="w-full relative">
                <IoClose
                  fontSize={35}
                  color="white"
                  className="cursor-pointer absolute -top-16 right-0"
                  onClick={() => {
                    setYoutubePlayer({ isOpen: false, videoId: "" });
                  }}
                />
                <Youtube
                  videoId={youtubePlayer.videoId}
                  loading="lazy"
                  iframeClassName="w-full min-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProblemSet;
