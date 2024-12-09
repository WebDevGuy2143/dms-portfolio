import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import profilePic from "../../../public/images/profile/profile-about.png"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"

const about = () => {
  return (
    <>
      <Head>
        <title>Gene&apos;s Portfolio | About Page</title>
        <meta
          name="description"
          content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let&apos;s create something extraordinary!"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Don’t wait for inspiration. It comes while working. – Henri Matisse"
            className="mb-16 !text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xs:!text-xl xs:mb-4"
          />
          <div className="grid w-full grid-cols-12 gap-16 sm:gap-8">
            <div className="col-span-6 flex flex-col items-start justify-start xl:col-span-4 md:!order-2 md:!col-span-8">
              <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75 dark:text-light">
                My Bio
              </h2>
              <p className="sm:text-sm text-xl font-medium pb-3">
              I have been passionate about technology since 2009, specializing in web development. My journey began at Chattahoochee Technical College in Marietta, Georgia, where I started as a freelance web developer. I later transferred to Gulf Coast State College in Panama City, Florida, expanding my expertise in website creation, and modern development methodologies.
              </p>
              <p className="sm:text-sm text-xl font-medium pb-3">
              Upon completion of my Digital Media Associate&apos;s and Bachelor&apos;s Degree, I acquired versatile skills encompassing Graphic Design, Programming, Videography, and Audio Engineering, enhancing my well-rounded industry profile.
              </p>
              <p className="sm:text-sm text-xl font-medium pb-3">
              My core coding competencies include HTML, CSS, JavaScript, PHP (with WordPress), Python, and C++. I am also proficient in popular frameworks such as React, Laravel, Bootstrapm, and TailwindCSS, as well as environments like NodeJS, Composer, Laravel, and Yarn.
              </p>
              <p className="sm:text-sm text-xl font-medium pb-3">
              Embracing the dynamic nature of the industry, I continuously update my skills to create cutting-edge, standards-compliant websites.
              </p>
              <p className="sm:text-sm text-xl font-medium">
              To connect, please reach me at genehowellwebguy@gmail.com or 404-310-4661.
              </p>

            </div>
            <div className="col-span-6 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:!order-1 md:!col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Gene Howell"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:!order-3">
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
