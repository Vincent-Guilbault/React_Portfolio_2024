import profilePic from "../assets/Vincent_pfp_1080x1080.png";

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
              Bonjour, je m’appelle Vincent Guilbault et je suis diplômé en
              Techniques d’intégration multimédia au Cégep de Saint-Jérôme! Je
              me spécialise dans le développement Web et j’ai pour objectif de
              devenir développeur full-stack dans le futur! J’ai donc hâte
              d’avoir la chance d’enrichir mes compétences ainsi que mes
              connaissances!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
