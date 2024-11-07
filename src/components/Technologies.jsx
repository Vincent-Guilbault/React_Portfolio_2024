import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaLaravel className="text-7xl text-red-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPhp className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJs className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-7xl text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
