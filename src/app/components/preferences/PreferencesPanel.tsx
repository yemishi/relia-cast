"use client";
import MultiInfoModel from "@/models/multiInfo";
import { MultiInfoProps } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { DivToggle } from "..";

type PropsType = {
  publicProperties: MultiInfoProps;
  setState: React.Dispatch<React.SetStateAction<MultiInfoModel>>;
  state: MultiInfoModel;
};

export default function PreferencesPanel({
  publicProperties,
  setState,
  state
}: PropsType) {
  const [open, setOpen] = useState<boolean>(false);
  const updatePreferences = () => {
    localStorage.setItem("multiInfo", JSON.stringify(publicProperties));
    setOpen(!open);
  };

  return (
    <DivToggle
      onChange={() => updatePreferences()}
      position="right"
      icon={
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="stroke-white cursor-pointer w-full h-full stroke-1 fill-white hover:rotate-180 duration-200"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier"></g>
          <g id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="icomoon-ignore"> </g>

            <path d="M17.599 3.738v2.598l0.8 0.207c0.905 0.234 1.768 0.597 2.566 1.081l0.715 0.434 1.86-1.86 2.262 2.262-1.888 1.888 0.407 0.708c0.451 0.785 0.788 1.635 1.002 2.527l0.196 0.817h2.744v3.199h-2.806l-0.216 0.782c-0.233 0.844-0.583 1.654-1.040 2.406l-0.434 0.716 2.036 2.035-2.262 2.262-2.064-2.064-0.707 0.407c-0.734 0.422-1.531 0.745-2.368 0.961l-0.8 0.206v2.951h-3.199v-2.951l-0.8-0.206c-0.837-0.216-1.634-0.539-2.368-0.961l-0.708-0.407-2.064 2.064-2.262-2.262 2.036-2.035-0.434-0.716c-0.457-0.753-0.807-1.562-1.040-2.406l-0.216-0.782h-2.806v-3.199h2.744l0.196-0.817c0.213-0.891 0.551-1.742 1.002-2.527l0.407-0.708-1.888-1.888 2.262-2.262 1.86 1.86 0.715-0.434c0.798-0.484 1.661-0.848 2.566-1.081l0.8-0.207v-2.598h3.199zM16 20.799c2.646 0 4.798-2.153 4.798-4.799s-2.152-4.799-4.798-4.799-4.798 2.153-4.798 4.799c0 2.646 2.152 4.799 4.798 4.799zM18.666 2.672h-5.331v2.839c-1.018 0.263-1.975 0.67-2.852 1.202l-2.022-2.022-3.769 3.77 2.065 2.065c-0.498 0.867-0.875 1.81-1.114 2.809h-2.97v5.331h3.060c0.263 0.953 0.655 1.85 1.156 2.676l-2.198 2.198 3.769 3.77 2.241-2.241c0.816 0.469 1.7 0.828 2.633 1.069v3.191h5.331v-3.191c0.933-0.241 1.817-0.6 2.633-1.069l2.241 2.241 3.769-3.77-2.198-2.198c0.501-0.826 0.893-1.723 1.156-2.676h3.060v-5.331h-2.97c-0.239-0.999-0.616-1.941-1.114-2.809l2.065-2.065-3.769-3.77-2.022 2.022c-0.877-0.532-1.834-0.939-2.852-1.202v-2.839h-0zM16 19.733c-2.062 0-3.732-1.671-3.732-3.733s1.67-3.732 3.732-3.732 3.732 1.671 3.732 3.732c0 2.062-1.67 3.733-3.732 3.733v0z"></path>
          </g>
        </motion.svg>
      }
      setState={setOpen}
      state={open}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-200 shadow-md shadow-black 00 text-black font-poppins font-medium flex flex-col gap-6 rounded-lg  p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {Object.entries(publicProperties).map(([title, obj]) => {
          const { enable } = obj;
          const toggle = () =>
            setState(
              state.toggleEnable(
                title as
                  | "clouds"
                  | "pressure"
                  | "timezone"
                  | "sunrise"
                  | "sunset"
              )
            );

          return (
            <div key={title} className="flex gap-8 items-center">
              <p className="first-letter:uppercase">{title}</p>
              <span
                onClick={toggle}
                className={`border w-16 h-9 rounded-full ml-auto  cursor-pointer relative duration-300 after:duration-300 after:absolute 
                after:h-6 after:top-1/2 after:-translate-y-1/2 after:bg-gray-200
                  after:w-6 after:ml-1 after:rounded-full ${
                    enable
                      ? "bg-[#f1aa14] after:left-0"
                      : "bg-gray-400 after:left-[calc(4rem_-_1.75rem_-_4px)]"
                  }`}
              />
            </div>
          );
        })}
      </motion.div>
    </DivToggle>
  );
}
