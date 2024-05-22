import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/FetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();

  // Fetch video details when the component mounts or the id changes
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
      .catch((error) => console.error("Error fetching video details:", error));
  }, [id]);

  // Show a loading message until the video details are loaded
  if (!videoDetail?.snippet) return 'Loading.....';

  // Destructure video details for easier access
  const { snippet: { description, publishedAt, title, channelId, channelTitle }, statistics: { likeCount, viewCount } } = videoDetail;

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-white dark:bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          {/* Video Player */}
          <div className="rounded-xl py-2 my-2 h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000", borderRadius: "12px" }}
              playing={true}
            />
          </div>
          {/* Video Title */}
          <div className="mb-4 text-black dark:text-white font-semibold text-xl md:text-xl line-clamp-2 mt-4">
            {title}
          </div>
          {/* Channel and Video Statistics */}
          <div className="flex items-center space-x-4">
            <img className="w-10 h-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVNDTCFdYkZVDp49l0Sux5b0qaQboq6swiLhZI04&s" alt={channelTitle} />
            <div className="font-medium dark:text-white">
              <div>{channelTitle}</div>
            </div>
            <div className="flex items-center gap-x-3 mb-5 sm:mb-0">
              <div className="flex items-center bg-[#f2f2f2] px-3 py-2 rounded-[10px]">
                <span className="text-[12.4px] sm:text-[14.4px] text-[#0f0f0f] font-medium tracking-wide">{likeCount} Likes</span>
              </div>
              <span className="text-[12.4px] sm:text-[14.4px] text-[#0f0f0f] font-medium tracking-wide bg-[#f2f2f2] px-3 py-2 rounded-[10px]">{viewCount} Views</span>
            </div>
          </div>
          {/* Video Description */}
          <div className="flex justify-between flex-col md:flex-row mt-2">
            <span className="text-[12.4px] sm:text-[14.4px] text-[#0f0f0f] font-medium bg-[#f2f2f2] px-5 py-2 pr-5 overflow-hidden rounded-[10px]">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
