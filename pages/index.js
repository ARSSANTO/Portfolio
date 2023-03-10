import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
} from "react-icons/ai";

/* all main image here */
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

/* all web image here */
import web_1 from "../public/web1.png";
import web_2 from "../public/web2.png";
import web_3 from "../public/web3.png";
import web_4 from "../public/web4.png";
import web_5 from "../public/web5.png";
import web_6 from "../public/web6.png";

/* state using from react */
import { useState } from "react";

/* Main Page */
export default function Home() {
  const [darkMode, setDarkmode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>

      <Head>
        <title>ARSanto Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl cursor-pointer select-none dark:text-gray-200">
              Created By Atikur Rahaman Santo
            </h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkmode(!darkMode) } className="cursor-pointer text-2xl select-none" />{" "}
              </li>
              <li>
                <a
                  className="select-none bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#||put link here||"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">
              Atikur Rahaman Santo
            </h2>
            <h2 className="text-2xl py-2 md:text-3xl dark:text-gray-200 "> Developer & Graphic Desinger </h2>
            <p className="text-md py-5 leading-6 text-gray-800 dark:text-gray-200 md-text-xl max-w-lg mx-auto">
              Hey,
              <br />I am a highly skilled back-end developer, FiveM developer
              and graphic designer. My expertise in back-end development
              includes proficiency in technologies such as PHP, Node.js, and
              experience with databases such as MySQL I have experience in
              developing and maintaining various types of web applications and
              services. I am also a FiveM developer, with knowledge in Lua,
              JavaScript and SQL and experience in developing custom scripts and
              plugins for the popular gaming platform. Additionally, I am a
              highly talented graphic designer, with experience in creating
              visually stunning designs for both digital and print media using
              tools such as Photoshop, Illustrator and Sketch. I am passionate
              about my work and am always looking for new opportunities to
              improve my skills and take on new challenges.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-gray-200">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillFacebook />
            <AiFillGithub />
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20  overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
        <div className="text-center p-10">
            <h3 className="text-3xl py-1 "> Services I Offer</h3>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              Since the begining of my journey as a frelancer developer, I'have
              done remote work for
              <span className="text-teal-500"> agencies</span>
            </p>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              Since the begining of my journey as a frelancer developer, I'have
              done remote work for
              <span className="text-teal-500"> agencies</span>
            </p>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              Since the begining of my journey as a frelancer developer, I'have
              done remote work for
              <span className="text-teal-500"> agencies</span>
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-r-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className=" py-2">
                Creating eye catchy elegant design suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use </h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Ilastrator</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-r-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className=" py-2">
                Creating eye catchy elegant design suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use </h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Ilastrator</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-r-xl my-10">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Design
              </h3>
              <p className=" py-2">
                Creating eye catchy elegant design suited for your needs
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use </h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Ilastrator</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Figma</p>
            </div>
            
          </div>
        </section>

        <section>

          <div>
            <h3 className="text-3xl py-1 ">PortFolio</h3>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              Since the begining of my journey as a frelancer developer, I'have
              done remote work for
              <span className="text-teal-500"> agencies</span>
            </p>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              Since the begining of my journey as a frelancer developer, I'have
              done remote work for
              <span className="text-teal-500"> agencies</span>
            </p>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-200">
              Since the begining of my journey as a frelancer developer, I'have
              done remote work for
              <span className="text-teal-500"> agencies</span>
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-warp">
            <div  className="basis-1/3 flex-1">
              <Image src={web_1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div  className="basis-1/3 flex-1">
              <Image src={web_2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div  className="basis-1/3 flex-1">
              <Image src={web_3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div  className="basis-1/3 flex-1">
              <Image src={web_4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div  className="basis-1/3 flex-1">
              <Image src={web_5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div  className="basis-1/3 flex-1">
              <Image src={web_6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
