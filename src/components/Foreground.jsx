import { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      desc: "The sky turned crimson as the sun dipped below the horizon. A gentle breeze whispered secrets through the tall grass.",
      filesize: "0.4mb",
      closeIcon: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },

    {
      desc: "She scribbled dreams into a worn notebook, page after page. Hope, though fragile, burned bright in her eyes.",
      filesize: "0.4mb",
      closeIcon: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "sky" },
    },

    {
      desc: "Footsteps echoed in the empty hallway like distant drums. Each step forward felt like a journey through time.",
      filesize: "0.4mb",
      closeIcon: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "sky" },
    },
  ];

  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="fixed left-0 top-0 z-[3] flex h-screen w-full flex-wrap gap-6 px-8 py-8"
    >
      {data.map((item, idx) => (
        <Card key={idx} data={item} parentRef={ref} />
      ))}
    </div>
  );
}

export default Foreground;
