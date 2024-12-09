import React from "react"

import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import project1 from "../../../../public/images/graphicDesign.jpg"
import project2 from "../../../../public/images/project-1-campground-iconsProjectImage.png"

import TransitionEffect from "@/components/TransitionEffect"

const Tags = ({ text }) => {
  // Ensure text is an array
  const tags = Array.isArray(text) ? text : [text]

  // Function to get the dynamic class based on the tag
  const getTagClass = () => {
    const lowerCaseTags = tags.map((tag) => tag.toLowerCase())

    for (const tag of lowerCaseTags) {
      switch (tag) {
        case "illustrator":
          return "bg-amber-600 text-light sm:text-sm text-xl"
        case "photoshop":
          return "bg-blue-600 text-light sm:text-sm text-xl"
        case "indesign":
          return "bg-purple-600 text-light sm:text-sm text-xl"
        default:
          return "bg-blue-100 text-blue-800 sm:text-sm text-xl"
      }
    }
  }

  return (
    <span
      className={`sm:text-sm text-xl text-center font-medium mt-2 px-2 py-3 rounded-full self-center ${getTagClass()}`}
    >
      {tags.join(", ")}
    </span>
  )
}

const FeaturedProject = ({ type, title, tags, summary, img, link }) => {
  return (
    <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-125 hover:transition-all hover:ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl sm:text-sm text-xl text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline sm:text-sm text-xl"
        >
          <h2 className="my-2 w-full text-left sm:text-sm text-xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-[90%] relative flex flex-wrap sm:justify-center space-x-3 space-y-3">
          {tags.map((tagItem, index) => {
            return <Tags key={index} text={tagItem} />
          })}
        </div>

        <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark p-2 px-6 sm:text-sm text-xl font-semibold text-light dark:bg-light dark:text-dark  sm:px-4 sm:text-base "
          >
            View My Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, summary, tags, type, img, link }) => {
  return (
    <article className="w-full flex-col flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative  dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg sm:text-sm text-xl"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto sm:text-sm text-xl dark:text-light hover:scale-125 hover:transition-all hover:ease-in-out"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary outline-color: #000 font-medium sm:text-sm text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 sm:text-sm text-xl"
        >
          <h2 className="my-2 w-full text-left sm:text-sm text-xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="w-[90%] relative flex flex-wrap sm:justify-center space-x-3 space-y-3">
          {tags.map((tagItem, index) => (
            <Tags key={index} text={tagItem} />
          ))}
        </div>
        <p className="my-2 sm:text-sm text-xl text-dark hover:transition-none dark:text-light">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="sm:text-sm text-xl font-semibold hover:underline underline-offset-2 hover:scale-110 transition-all dark:text-light"
          >
            View My Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const graphicDesignProjects = () => {
  return (
    <>
      <Head>
        <title>Gene&apos;s Portfolio | My Works Page</title>
        <meta
          name="description"
          content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
        />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout
          className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:!pl-6 lg:!p-16 
      md:!p-12 xs:!p-2 sm:!p-8 pt-16 overflow-hidden"
        >
          <AnimatedText
            text='“Don’t wait for inspiration. It comes while working." – Henri Matisse'
            className="inline-block text-dark dark:text-light font-bold w-full capitalize mb-16 md:mb-6 md:!text-3xl !text-6xl !leading-tight lg:!text-6xl sm:!mb-8 sm:!text-3xl xs:mt-4 xl:text-6xl xs:!text-xl xs:mb-4"
          />

          <div className="w-full grid grid-cols-12 center gap-24 gap-y-32 xl:gap-x-16 lg:w-full lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 md:col-span-9 xs:col-span-12 xs:mr-2">
              <FeaturedProject
                title="Cooper's Campground Icons Project"
                img={project2}
                tags={["Illustrator", "Photoshop"]}
                summary="Cooper’s Lake Campground is a family-oriented camping destination that accommodates individual campers and hosts large-scale events. The campground seeks a cohesive, scalable icon system for use across various media including signage, printed materials, and their website."
                link="/MyWorks/GraphicDesignProjects/campGoundIconsProject"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 md:col-span-9 xs:col-span-12 xs:mr-2">
              <Project
                title="Boilerplate"
                img={project1}
                tags={["Illustrator", "Photoshop", "InDesign"]}
                summary="Web dev project boilerplate descriptions highlight key technologies like front-end frameworks (e.g., React), back-end tools (Node.js, Django), version control (Git), package managers (npm, yarn), styling preprocessors (Sass, Less), and deployment platforms (Heroku, AWS). Essentially, it sets the groundwork for project success."
                link="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 md:col-span-9 xs:col-span-12 xs:mr-2">
              <Project
                title="Boilerplate"
                img={project1}
                tags={["Illustrator", "Photoshop", "InDesign"]}
                summary="Web dev project boilerplate descriptions highlight key technologies like front-end frameworks (e.g., React), back-end tools (Node.js, Django), version control (Git), package managers (npm, yarn), styling preprocessors (Sass, Less), and deployment platforms (Heroku, AWS). Essentially, it sets the groundwork for project success."
                link="/"
                type="Project"
              />
            </div>
            <div className="col-span-12 md:col-span-9 xs:col-span-12 xs:mr-2">
              <FeaturedProject
                title="Boilerplate Featured"
                img={project1}
                tags={["Illustrator", "Photoshop", "InDesign"]}
                summary="Web dev project boilerplate descriptions highlight key technologies like front-end frameworks (e.g., React), back-end tools (Node.js, Django), version control (Git), package managers (npm, yarn), styling preprocessors (Sass, Less), and deployment platforms (Heroku, AWS). Essentially, it sets the groundwork for project success."
                link="/"
                type="Featured Project"
              />
            </div>
{/*             <div className="col-span-6 md:col-span-9 xs:col-span-12 xs:mr-2">
              <Project
                title="Boilerplate"
                img={project1}
                tags={["Illustrator", "Photoshop", "InDesign"]}
                summary="Web dev project boilerplate descriptions highlight key technologies like front-end frameworks (e.g., React), back-end tools (Node.js, Django), version control (Git), package managers (npm, yarn), styling preprocessors (Sass, Less), and deployment platforms (Heroku, AWS). Essentially, it sets the groundwork for project success."
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 md:col-span-9 xs:col-span-12 xs:mr-2">
              <Project
                title="Boilerplate"
                img={project1}
                tags={["Illustrator", "Photoshop", "InDesign"]}
                summary="Web dev project boilerplate descriptions highlight key technologies like front-end frameworks (e.g., React), back-end tools (Node.js, Django), version control (Git), package managers (npm, yarn), styling preprocessors (Sass, Less), and deployment platforms (Heroku, AWS). Essentially, it sets the groundwork for project success."
                link="/"
                github="/"
                type="Project"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  )
}

export default graphicDesignProjects
