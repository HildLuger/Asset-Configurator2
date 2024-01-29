import '../globals.css';

export default function About() {
  return (
    <div className="h-screen flex items-center justify-center ml-14vw mr-14vw ">

      <div className=' bg-custom-blue dark:bg-custom-purple text-gray-600 dark:text-white p-10 '>

      <div>
        <h1 className="text-2xl text-center font-bold bg-custom-blue dark:bg-custom-purple text-gray-600 dark:text-white mb-1 p-3">
         Welcome.
        </h1>
        <p className=" text-center text-base bg-custom-blue dark:bg-custom-purple text-gray-600 dark:text-white leading-relaxed mb-2 p-3">
           I&apos;m Hild Luger, a Front-End Web Developer. <br /> I built this Asset Configurator using Next.js 14, Typescript, React Three Fiber, Redux ToolKit and Tailwind CSS. <br />
           Feel free to contact me for future projects.
        </p>
        
        <p className="text-center text-base text-gray-600 dark:text-gray-100 leading-relaxed mb-3 p-3">
          <a href="https://www.linkedin.com/in/hild-luger-3aab07160/?locale=en_US" target="_blank" rel="noopener noreferrer" className="p-5 bg-custom-blue dark:bg-custom-purple    text-red-800 hover:text-red-500">
            Linkedin
          </a><br /> <br />
          <a href="https://github.com/HildLuger" target="_blank" rel="noopener noreferrer" className=" p-3 bg-custom-blue dark:bg-custom-purple  text-red-800 hover:text-red-500">
            GitHub 
          </a><br /><br />
        </p>
        <p className="text-center text-base bg-custom-blue dark:bg-custom-purple text-gray-600  dark:text-white leading-relaxed mb-3 p-3">
          I&apos;m also a 3D Technical Artist. <br /> You can see my 3D portfolio at the following link:
        </p>
        <div className="text-center">
          <a href="https://www.artstation.com/longshortdreamslsd" target="_blank" rel="noopener noreferrer" className="p-3 bg-custom-blue dark:bg-custom-purple   text-red-800 hover:text-red-500">
            ArtStation Portfolio
          </a>
        </div>
      </div>
      </div>
      
    </div>
  );
}
