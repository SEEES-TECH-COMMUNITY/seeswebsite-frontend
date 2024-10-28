import React, { useRef } from "react";
import type { NextPage } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import LandingPageHeader from "@src/components/atoms/LandingPageHeader";
import LandingFooter from "@src/components/atoms/LandingFooter";
import { easeIn, motion, useScroll, useInView } from "framer-motion";
import LandingHeroSection from "@src/components/atoms/LandingHeroSection";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500"],
  subsets: ["latin", "latin-ext"],
});

const variants = {
  initial: {
    y: 100,
    scale: 0.8,
    opacity: 0.3,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const variantsOne = {
  initial: {
    y: 100,
    opacity: 0.3,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      delay: 0.1,
    },
  },
};

const variantsTwo = {
  initial: {
    y: -100,
    scale: 1,
    opacity: 0.5,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 3,
      type: "spring",
      bounce: "0.3",
      delay: 0.1,
    },
  },
};

const variantsThree = {
  initial: {
    x: -50,
    scale: 1,
    opacity: 0.3,
  },
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.5,
      type: "spring",
      bounce: "0.5",
    },
  },
};

const variantsFour = {
  initial: {
    x: 50,
    scale: 1,
    opacity: 0.3,
  },
  animate: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 0.5,
      type: "spring",
      bounce: "0.5",
    },
  },
};

const Page: NextPage = () => {
  const ref = useRef<HTMLElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['0 1', '1.33 1'],
  // });

  return (
    <section className={` ${montserrat.className} overflow-x-hidden`}>
      <LandingPageHeader />
      <LandingHeroSection />

      <motion.section
        className="flex flex-col-reverse items-center justify-between gap-2 px-5 pb-14 md:flex md:flex-row md:px-10  lg:px-20"
        ref={ref}
        variants={variantsOne}
        initial="initial"
        whileInView="animate"
      >
        <div className="w-full md:w-1/2">
          <Image
            src="/mission.jpg"
            alt="Mission Image"
            width={600}
            height={400}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="mb-4 text-center text-2xl font-semibold md:text-justify lg:text-3xl">
            Our Mission
          </h1>
          <p className=" mb-3 text-center text-sm font-medium md:text-left md:text-base lg:text-lg">
            Fostering the educational journey of electrical engineering students
            with a dynamic and all-encompassing learning experience is our
            mission. We serve as the ultimate hub for course outlines,
            educational resources, CGPA calculations, campus updates, and
            valuable industry insights, empowering electrical and electronics
            engineering students to transition into skilled professionals.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col-reverse items-center justify-between gap-2 px-5 pb-14 md:flex md:flex-row md:px-10  lg:px-20"
        ref={ref}
        variants={variantsOne}
        initial="initial"
        whileInView="animate"
      >
        <div className="w-full items-center justify-center rounded-md p-4 shadow-md md:w-1/2">
          <h1 className="mb-4 text-center text-2xl font-semibold md:text-justify lg:text-3xl">
            Presidential Address
          </h1>
          <p className=" mb-3 text-center text-xs font-medium md:text-left md:text-base lg:text-lg">
            Welcome to the Official Website of SEEES, Uniben Chapter!<br></br>
            <br></br> On behalf of the SOCIETY of ELECTRICAL and ELECTRONICS
            ENGINEERING STUDENTS (SEEES), University of Benin Chapter, I warmly
            welcome you to our website.<br></br>
            <br></br> We are privileged to represent a vibrant community of
            nearly a thousand students in the Electrical and Electronics
            Engineering Department, optimistically moved by the passion for
            INNOVATION, LEARNING and EXCELLENCE. <br></br>
            <br></br>We encourage you to engage, connect and grow with us.
            Together, we are ever ready to shape the future of Electrical and
            Electronic Engineering! Thank you for visiting, even as we
            anticipate your continued presence on our website!
          </p>
        </div>
        <div className="p-15 w-full items-center justify-center rounded-md p-16 shadow-md md:w-1/2">
          <Image
            src="/SEEES-President-1.jpg"
            alt="President Image"
            width={440}
            height={100}
          />
        </div>
      </motion.section>

      <motion.section
        className="px-5 pb-14 md:px-10  lg:px-20"
        ref={ref}
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="">
          <h1 className="mb-2 text-2xl font-semibold md:mb-10 lg:text-3xl">
            SEEES NEWS
          </h1>
        </div>
        <div className="flex items-center justify-between gap-x-6 overflow-x-scroll scroll-smooth py-4 scrollbar-hide">
          <div className="min-w-[320px] flex-1 rounded-lg shadow-xl duration-300 ease-in-out hover:scale-105">
            <div className="mb-4 h-[200px]">
              <img
                src="/First-Class-Insight.jpg"
                alt=""
                className=" h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="px-3">
              <div className="my-2 flex items-center justify-between">
                <h1 className="text-lg font-bold">First Class Insights</h1>
                <div className="rounded-xl bg-[#001242] px-4 py-2 text-sm text-white lg:text-base">
                  Event
                </div>
              </div>
              <div className="text-sm font-medium  text-gray-800 lg:text-base">
                First Class Insight offers students a structured approach to
                achieving academic excellence, providing guidance, resources,
                and strategies for mastering complex subjects. This program
                empowers students to reach their full potential with tools and
                insights for sustained academic success.
              </div>
              <div className=" flex items-center justify-between py-4">
                <p className=" text-base font-semibold">14th jan, 2024</p>
                <a href="" className="font-semibold text-[#001242] underline">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="min-w-[320px] flex-1 rounded-lg shadow-xl duration-300 ease-in-out hover:scale-105">
            <div className="mb-4 h-[200px]">
              <img
                src="/Accessing-International-Education.jpg"
                alt=""
                className=" h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="px-3">
              <div className="my-2 flex items-center justify-between">
                <h1 className="text-lg font-bold">
                  Accessing International Education Through Scholarship
                </h1>
                <div className="rounded-xl bg-[#001242] px-4 py-2 text-sm text-white lg:text-base">
                  Event
                </div>
              </div>
              <div className="text-sm font-medium  text-gray-800 lg:text-base">
                This initiative provides students with insights and resources
                for securing scholarships to study abroad. By highlighting
                various opportunities and application strategies, it empowers
                students to pursue their academic goals globally and unlock new
                educational and cultural experiences.
              </div>
              <div className=" flex items-center justify-between py-4">
                <p className=" text-base font-semibold">9th june, 2024</p>
                <a href="" className="font-semibold text-[#001242] underline">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="min-w-[320px] flex-1 rounded-lg shadow-xl duration-300 ease-in-out hover:scale-105">
            <div className="mb-4 h-[200px]">
              <img
                src="/PEESA.jpg"
                alt=""
                className=" h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="px-3">
              <div className="my-2 flex items-center justify-between">
                <h1 className="text-lg font-bold">PEESA CLUB</h1>
                <div className="rounded-xl bg-[#001242] px-4 py-2 text-sm text-white lg:text-base">
                  Event
                </div>
              </div>
              <div className="text-sm font-medium  text-gray-800 lg:text-base">
                The PEESA Club empowers students with hands-on skills through
                workshops and practical projects, members gain essential
                knowledge in circuit design, handling, and real-world
                applications. The club fosters technical proficiency and
                prepares students for future careers in the industry.
              </div>
              <div className=" flex items-center justify-between py-4">
                <p className=" text-base font-semibold">21st april, 2024</p>
                <a href="" className="font-semibold text-[#001242] underline">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="min-w-[320px] flex-1 rounded-lg shadow-xl duration-300 ease-in-out hover:scale-105">
            <div className="mb-4 h-[200px]">
              <img
                src="/FYB-2023.jpg"
                alt=""
                className=" h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="px-3">
              <div className="my-2 flex items-center justify-between">
                <h1 className="text-lg font-bold">Field Trip To Transcorp</h1>
                <div className="rounded-xl bg-[#001242] px-4 py-2 text-sm text-white lg:text-base">
                  Event
                </div>
              </div>
              <div className="text-sm font-medium  text-gray-800 lg:text-base">
                The FYB class visited the Transcorp Power Plant in Ughelli,
                where students interacted with engineers, gaining practical
                insights into power generation and Nigeria’s energy supply,
                enhancing their academic learning with real-world exposure.
              </div>
              <div className=" flex items-center justify-between py-4">
                <p className=" text-base font-semibold">29th june, 2024</p>
                <a href="" className="font-semibold text-[#001242] underline">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="min-w-[320px] flex-1 rounded-lg shadow-xl duration-300 ease-in-out hover:scale-105">
            <div className="mb-4 h-[200px]">
              <img
                src="/sees-week-2023.jpg"
                alt=""
                className=" h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="px-3">
              <div className="my-2 flex items-center justify-between">
                <h1 className="text-lg font-bold">SEEES Week 2023</h1>
                <div className="rounded-xl bg-[#001242] px-4 py-2 text-sm text-white lg:text-base">
                  Event
                </div>
              </div>
              <div className="text-sm font-medium  text-gray-800 lg:text-base">
                The Office of the President, SEEES, presents this session's
                SEEES week. SEEES Week is an annual departmental event in
                electrical and electronics engineering, featuring a mix of
                academic and extracurricular activities.
              </div>
              <div className=" flex items-center justify-between py-4">
                <p className=" text-base font-semibold">
                  9th Oct-13th Oct, 2023
                </p>
                <a href="" className="font-semibold text-[#001242] underline">
                  Details
                </a>
              </div>
            </div>
          </div>

          <div className="min-w-[320px] flex-1 rounded-lg shadow-xl duration-300 ease-in-out hover:scale-105">
            <div className="mb-4 h-[200px]">
              <img
                src="/world-nature-day.jpg"
                alt=""
                className=" h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="px-3">
              <div className="my-2 flex items-center justify-between">
                <h1 className="text-lg font-bold">
                  World Nature Conservation Day
                </h1>
                <div className="rounded-xl bg-[#001242] px-4 py-2 text-sm text-white lg:text-base">
                  Event
                </div>
              </div>
              <div className="text-sm font-medium  text-gray-800 lg:text-base">
                World Nature Conservation Day, celebrated on July 28th,
                emphasizes our responsibility to safeguard the environment. It
                raises awareness about conserving nature, promoting
                sustainability, and protecting biodiversity.
              </div>
              <div className=" flex items-center justify-between py-4">
                <p className=" text-base font-semibold">28th july, 2023</p>
                <a href="" className="font-semibold text-[#001242] underline">
                  Details
                </a>
              </div>
            </div>
          </div>

          <div className="min-w-[320px] flex-1 rounded-lg shadow-xl duration-300 ease-in-out hover:scale-105">
            <div className="mb-4 h-[200px]">
              <img
                src="/power-up-skill.jpg"
                alt=""
                className=" h-full w-full rounded-t-lg object-cover"
              />
            </div>
            <div className="px-3">
              <div className="my-2 flex items-center justify-between">
                <h1 className="text-lg font-bold">SEEES Power Up Skill</h1>
                <div className="rounded-xl bg-[#001242] px-4 py-2 text-sm text-white lg:text-base">
                  Training
                </div>
              </div>
              <div className="text-sm font-medium  text-gray-800 lg:text-base">
                The SEEES Power Up Skill Training is an electrical installation
                workshop, presented by the Office of the President at SEEES,
                with the goal of familiarizing engineering students with the
                intricacies of electrical installation.
              </div>
              <div className=" flex items-center justify-between py-4">
                <p className=" text-base font-semibold">
                  29th may-5th june, 2023
                </p>
                <a href="" className="font-semibold text-[#001242] underline">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-5 md:px-10  lg:px-20">
          <a href="" className="text-lg font-semibold text-[#001242] underline">
            See more
          </a>
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col items-center justify-between gap-x-4 gap-y-2 bg-blue-100 px-5 py-14  md:flex md:flex-row  md:px-10 lg:px-20"
        variants={variantsTwo}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="w-full pb-8 md:w-1/2"
          variants={variantsTwo}
          initial="initial"
          whileInView="animate"
        >
          <h1 className="mb-4 text-center text-2xl font-semibold md:text-justify lg:text-3xl">
            Learning Resources
          </h1>
          <p className=" mb-3 text-center text-sm font-medium md:text-left md:text-base lg:text-lg">
            Explore carefully curated educational resources, such as textbooks,
            study notes, and informative handouts. Deepen your understanding
            through immersive experiences, solidifying your knowledge. Your
            ultimate destination for all-encompassing learning.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <button className="translate mr-8 rounded-md bg-blue-600 px-8 py-2 text-white duration-200 ease-in hover:scale-105">
              Start Learning
            </button>
          </div>
        </motion.div>
        <motion.div
          className="flex w-full items-center justify-center md:w-1/2 md:justify-end"
          variants={variantsTwo}
          initial="initial"
          whileInView="animate"
        >
          <Image
            src="/learning.avif"
            alt="Events Image"
            width={500}
            height={400}
            className="rounded-md shadow-lg"
          />
        </motion.div>
      </motion.section>

      <section className="flex flex-col items-center justify-between gap-x-4 gap-y-2 bg-white px-5 py-14 md:flex md:flex-row md:px-10  lg:px-20">
        <motion.div
          className="mb:w-[50%] w-full"
          variants={variantsThree}
          initial="initial"
          whileInView="animate"
        >
          <h1 className="mb-4 text-center text-2xl font-semibold md:text-justify lg:text-3xl">
            Events
          </h1>
          <p className=" mb-3 text-center text-sm font-medium md:text-left md:text-base lg:text-lg">
            At the Electrical and Electronics Engineering department UNIBEN, we
            embrace a holistic approach to education that extends beyond
            traditional classrooms. Discover our wide array of events that bring
            together various interests and inquisitive minds.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <button className="translate mr-8 rounded-md bg-blue-600 px-8 py-2 text-white duration-200 ease-in hover:scale-105">
              Checkout Events
            </button>
          </div>
        </motion.div>
        <motion.div
          className="flex w-full items-center justify-end md:w-[50%]"
          variants={variantsFour}
          initial="initial"
          whileInView="animate"
        >
          <Image
            src="/events.avif"
            alt="Events Image"
            width={500}
            height={400}
          />
        </motion.div>
      </section>

      <LandingFooter />
    </section>
  );
};
export default Page;
