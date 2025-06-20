import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "motion/react";

function Card({ data, parentRef }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={parentRef}
        whileDrag={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        dragElastic={0.1}
        dragTransition={{
          bounceStiffness: 600,
          bounceDamping: 10,
        }}
        className="relative h-72 w-60 overflow-hidden rounded-[40px] bg-zinc-900/90 px-8 py-10 text-white"
      >
        <FaRegFileAlt />
        <p className="mt-4 text-sm tracking-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 left-0 w-full">
          <div className="flex items-center justify-between px-8 py-4">
            <h5 className="text-sm">{data.filesize}</h5>
            <span className="">
              {data.closeIcon ? (
                <IoIosClose size="1.2em" />
              ) : (
                <MdDownloadForOffline size="1.05em" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag flex w-full items-center justify-center ${data.tag.tagColor === "blue" ? "bg-sky-600" : "bg-green-600"} py-4 text-sm`}
            >
              <h5>{data.tag.tagTitle}</h5>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
