import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import React from "react"
import TransitionEffect from "@/components/TransitionEffect"

const audioPlaylist = () => {
  return (
    <>
      <Head>
        <title>Gene&apos;s Portfolio | Audio Playlist Page</title>
        <meta
          name="description"
          content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
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
            <h1 className="col-span-12 text-6xl font-bold text-center">
              My Audio Projects
            </h1>
            <div className="col-span-6 sm:col-span-6 text-center">
              <script
                src="https://static.elfsight.com/platform/platform.js"
                async
              ></script>
              <div
                class="elfsight-app-fe322d18-eabd-40b5-ab7c-34b02571f383"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default audioPlaylist
