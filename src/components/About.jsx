import profilePic from "../assets/Vincent_pfp_1080x1080.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        Plus sur <span className="text-neutral-500">moi</span>
      </h2>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={profilePic}
              alt="Vincent Guilbault Profile Picture"
              className="max-h-96 rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl py-6 my-2 font-light tracking-tighter">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
