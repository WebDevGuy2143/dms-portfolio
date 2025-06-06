import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import project1 from "../../../public/images/WebDev.jpg"
import project2 from "../../../public/images/graphicDesign.jpg"
import project3 from "../../../public/images/videoProduction.jpg"
import project4 from "../../../public/images/AudioProduction.jpg"
import project5 from "../../../public/images/SoftwareDevPic.jpg"
import project6 from "../../../public/images/SocialMediaMarketing.jpg"
import TransitionEffect from "@/components/TransitionEffect"

const Project = ({ title, img, link, alt }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-5 relative hover:bg-purple-600 transition-all">
      <div className="relative w-full mx-auto">
        <Link href={link}>
          <Image
            className="h-64 w-full object-cover rounded-md"
            src={img}
            alt={alt}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">{title}</h2>
          </div>
        </Link>
      </div>
    </article>
  )
}

const myWorks = () => {
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text='&ldquo;The worst enemy to creativity is self-doubt.&rdquo; – Sylvia Plath'
            className="mb-16 !text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text-6xl md:mb-6 md:!text-5xl sm:!text-3xl xs:!text-xl xs:mb-4"
          />

          <div className="flex flex-wrap gap-24">
            <div className="flex-col-6 sm:col-span-12">
              <Project
                title="Web Development"
                img={project1}
                link="/MyWorks/WebProjects/webProjects"
                alt="Web Development Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Graphic Design"
                img={project2}
                link="/MyWorks/GraphicDesignProjects/graphicDesignProjects"
                alt="Graphic Design Projects"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Video Production"
                img={project3}
                link="/MyWorks/VideoProduction/videoProdProjects"
                alt="Video Production Projects"
              />
            </div>
            <div className="col-span-12 2xl:col-span-6">
              <Project
                title="Audio Production"
                img={project4}
                link="/MyWorks/AudioProductionProjects/audioPlaylist"
                alt="Audio Production Playlist"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:text-center">
              <Project
                title="Software Development"
                img={project5}
                link="/MyWorks/SoftwareDevProjects/softwareDevProjects"
                alt="Software Programming"
              />
            </div>
            <div className="col-span-6 sm:col-span-12 xs:text-center">
              <Project
                title="Social Media Marketing"
                img={project6}
                link="/MyWorks/SocialMediaMarketing/socialMediaProjects"
                alt="Software Programming"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default myWorks
