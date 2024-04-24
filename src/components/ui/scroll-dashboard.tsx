"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Link from "next/link";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="md:h-[80rem] flex items-center justify-center relative p-2"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
          <section className="">
      <div className="w-[95%] mx-auto max-w-[1400px] bg-center bg-cover rounded-3xl pb-10 text-center flex flex-col items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-semibold text-gray-800 tracking-tight text-center">Build and launch <span className="bg-gradient-to-r from-main via-[#7134eb] via-[#6531cc] via-[#7134eb] to-main text-transparent bg-clip-text">products faster</span></h1>
          <p className="text-lg mx-auto max-w-[800px] font-medium text-gray-600">Manage web analytics, cron jobs, monitoring, feature flags, waitlists, client feedback and more within just one platform. ToolBird makes building tech products easier</p>
        </div>
        <div className="flex items-center gap-3 my-10">
          <Link className="bg-main border-[3px] border-main px-6 py-3 text-white rounded-full font-semibold text-sm" href={"/"}>Join Waitlist</Link>
          <Link className="bg-transparent border-[3px] border-main px-6 py-3 text-main rounded-full font-semibold text-sm" href={"/"}>Learn More</Link>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      className="max-w-5xl -mt-0 mx-auto h-[30rem] md:h-[40rem] w-full bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full  overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};
