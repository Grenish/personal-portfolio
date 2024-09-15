"use client";

import React, { useRef } from "react";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

const FloatingDock = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      className="p-2 bg-neutral-900 rounded-xl fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-3"
      onMouseMove={(e) => mouseX.set(e.pageX)} // Update mouseX on mouse move
      onMouseLeave={() => mouseX.set(Infinity)} // Reset mouseX when the mouse leaves
    >
      <IconContainer
        mouseX={mouseX}
        icon={<IconBrandGithub className="text-neutral-300" />}
      />
      <IconContainer
        mouseX={mouseX}
        icon={<IconBrandX className="text-neutral-300" />}
      />
      <IconContainer
        mouseX={mouseX}
        icon={<IconExchange className="text-neutral-300" />}
      />
      <IconContainer
        mouseX={mouseX}
        icon={<IconHome className="text-neutral-300" />}
      />
      <IconContainer
        mouseX={mouseX}
        icon={<IconNewSection className="text-neutral-300" />}
      />
      <IconContainer
        mouseX={mouseX}
        icon={<IconTerminal2 className="text-neutral-300" />}
      />
    </motion.div>
  );
};

export default FloatingDock;

// IconContainer component that handles the animation logic
function IconContainer({
  mouseX,
  icon,
}: {
  mouseX: MotionValue<number>;
  icon: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate the distance between the mouse and the icon
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return val - bounds.x - bounds.width / 2;
  });

  // Transform the container's width based on the distance
  const widthTransform = useTransform(distance, [-150, 0, 150], [50, 80, 50]);
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // Set the container's height to a fixed value
  const height = 60; // Adjust as needed

  // Transform the icon size to slightly exceed the container
  const iconSizeTransform = useTransform(
    distance,
    [-150, 0, 150],
    [30, 90, 30]
  );
  const iconSize = useSpring(iconSizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      ref={ref}
      style={{ width, height, overflow: "visible" }}
      className="bg-neutral-700 rounded-full flex items-center justify-center"
    >
      <motion.div
        style={{ width: iconSize, height: iconSize }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}
