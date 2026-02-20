import React from "react";
import { motion } from "framer-motion";
type ItemProps = {
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  location: string;
};
type Props = {
  data: [ItemProps] | any;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Timeline = ({ data }: Props) => {
  return (
    <section className="relative flex flex-col justify-start bg-transparent overflow-hidden">
      <div className="w-full max-w-6xl px-4 md:px-6 py-4">
        <div className="flex flex-col justify-center divide-y divide-slate-200 ">
          <div className="w-full max-w-3xl">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {/* Start */}
              {(data || [])?.map((item: any, index: number) => (
                <motion.div
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  key={index}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-700 dark:bg-slate-700 bg-slate-300 group-[.is-active]:bg-white dark:group-[.is-active]:bg-slate-700 text-slate-500 dark:group-[.is-active]:text-white/80 group-[.is-active]:text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {item.icon}
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  px-5 py-3 bg-white borderBlack rounded-xl  dark:bg-white/10 dark:text-white/80  shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-medium ">{item.location}</div>
                      <time className="text-xs font-medium ">{item.date}</time>
                    </div>
                    <div className="font-bold ">{item.title}</div>
                    <div className="text-sm">{item.description}</div>
                  </div>
                </motion.div>
              ))}

              {/* End */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
