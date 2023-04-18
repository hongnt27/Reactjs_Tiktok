import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaMusic, FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useElementOnScreen } from "../App";
const VideoInfo = ({ avatar, idName, nickName, music, content }) => {
  return (
    <div className="flex flex-row">
      <img className="w-[50px] h-[50px] rounded-full" src={avatar} alt="avt" />
      <div className="ml-3 min-w-[80%]">
        <div>
          <a href="a" className="text-xl font-bold hover:underline">
            {idName}
          </a>
          <a href="a" className="text-xl">
            {nickName}
          </a>
        </div>
        <div>{content}</div>
        <div className="flex flex-rows items-center">
          <FaMusic /> <span className="ml-3">{music}</span>
        </div>
      </div>
      <div>
        <button className="p-2 pl-4 border-2 border-red-400 text-red-400 rounded-md">
          Follow
        </button>
      </div>
    </div>
  );
};
const VideoContent = ({ video, like, cmt, share }) => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(true);
  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const isVisibile = useElementOnScreen(options, videoRef);
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisibile]);
  return (
    <div className="flex flex-row">
      <video
        ref={videoRef}
        onClick={handleVideo}
        className="w-[80%] h-[600px] ml-12 rounded-md mt-4"
        src={video}
        loop
      />
      <div className="flex flex-col justify-end ml-10">
        <div className="text-center mb-4">
          <div className="w-[40px] rounded-full h-[40px] bg-slate-200 flex items-center justify-center">
            <FaHeart className="text-xl " />
          </div>
          <span>{like}</span>
        </div>
        <div className="text-center mb-4">
          <div className="w-[40px] rounded-full h-[40px] bg-slate-200 flex items-center justify-center">
            <FaComment className="text-xl text-center" />
          </div>
          <span>{cmt}</span>
        </div>
        <div className="text-center mb-4">
          <div className="w-[40px] rounded-full h-[40px] bg-slate-200 flex items-center justify-center">
            <FaShare className="text-xl text-center" />
          </div>
          <span>{share}</span>
        </div>
      </div>
    </div>
  );
};
const Video = ({ data }) => {
  return (
    <div className="snap-start max-w-[500px] border-b-2 border-gray-200 pb-10 pt-10">
      <VideoInfo {...data} />
      <VideoContent {...data} />
    </div>
  );
};

export default Video;
