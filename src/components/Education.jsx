import React from "react"
import LiIcon from "./LiIcon"

const Details = ({ type, time, place, info }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full dark:text-light md:text-sm">{info}</p>
      </div>
    </li>
  )
}

const Education = () => {
  return (
    <div className="my-64 xs:!mt-14 xs:!mb-14">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:[90%] md:w-full">
        <div className="absolute left-9 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            type={"Marietta High School Diploma"}
            time={"2004-2008"}
            place={"Marietta High School"}
            info={
              "Completed high school level general education and elective courses. These courses comprised of Math, Science, Literature, Reading and Writing."
            }
          />
          <Details
            type={"Internet Specialist Certificate"}
            time={"2009-2015"}
            place={"Chattahoochee Technical College"}
            info={
              "Completed college certificate level courses in Internet Specialist. These courses comprised of Web Development, Programming, and other college level General Education courses. **I moved before finishing this certificate due to medical reasons.**"
            }
          />
          <Details
            type={"Associate Of Science In Digital Media and Design"}
            time={"2018-2020"}
            place={"Gulf Coast State College"}
            info={
              "Completed Associate level courses in digital media. These courses comprised of Web Development 1, Graphic Design 1 and 2, Video and Audio Production, software programming, and some Project Management Courses."
            }
          />
          <Details
            type={"Bachelor Of Science In Digital Media and Design"}
            time={"2021-2024"}
            place={"Gulf Coast State College"}
            info={
              "Completed Bachelor level courses. These courses included general education courses, as well as bachelor level web and computer programming, SEO, Web Analytics, as well as bachelor level Project Management courses."
            }
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
