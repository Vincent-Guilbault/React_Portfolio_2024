import profilePic from "../assets/Vincent_pfp_1080x1080.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Vincent Guilbault
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight">
              Full-Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Possèdant de bonnes connaissances en HTML, CSS, JavaScript, et
              bien plus, je suis le maillon fort qui transforme les concepts en
              réalités digitales dynamiques. Curieux et proactif, je
              m&#39;adapte aux dernières tendances pour mener vos projets vers
              le succès!
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex float-right">
            <img
              src={profilePic}
              alt="Vincent Guilbault Profile Picture"
              className="max-h-96 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
