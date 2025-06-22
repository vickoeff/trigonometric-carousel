import { useCallback, useEffect, useState } from "react";

import TimelineContent from "./TimelineContent";
import TimelineCircle from "./TimelineCircle";

import "./TimelineStyles.css";

interface ITimelineProps {
  radius?: number;
  data: {
    label: string;
    title: string;
    description: string;
    image: string;
  }[];
  RenderContent?: React.ReactNode | ((props: { title: string; description: string; radius: number }) => React.ReactNode);
}

export default function Timeline({ data, radius = 340, RenderContent }: ITimelineProps) {
  const [activeButton, setActiveButton] = useState<number>(0);

  // ===> Function to position button in a circular layout
  const positionButton = useCallback((radius: number) => {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.circle-button');

    buttons.forEach((button: HTMLButtonElement, index) => {
      const angle = (Math.PI * index) / data.length;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);

      button.style.transform = `translate(${x}px, ${y}px) rotate(${((Math.PI * activeButton) / data.length)}rad)`;
    });
  }, [activeButton, data]);

  // Initial layout
  useEffect(() => {
    positionButton(radius);
  }, [radius, positionButton]);


  // ===> Function to rotate the circle
  const rotateCircle = (targetAngle: number) => {
    const container = document.querySelector('.circle-container')! as HTMLElement;
    // Calculate the new rotation relative to the current angle
    container.style.transform = `rotate(${targetAngle}rad)`;

    // Add a class to trigger CSS transitions
    container.classList.add('rotating');

    // Remove the rotating class after transition ends to reset
    setTimeout(() => {
      container.classList.remove('rotating');

    }, 500);
  };

  // ===> Function Button on click
  const handleButtonClick = (i: number) => {
    setActiveButton(i);

    const targetAngle = -((Math.PI * i) / data.length);
    rotateCircle(targetAngle);

    positionButton(radius);
  }

  return (
    <div className="container" style={{ backgroundImage: `url(${data[activeButton].image})`, backgroundSize: "cover" }}>
      <div className="container_inner">
        {/**
         * Timeline Controll
         */}
        <TimelineCircle data={data} radius={radius} activeButton={activeButton} onClick={handleButtonClick} />

        {/**
         * Timeline Content
         */}
        {
          typeof RenderContent === "function"
            ? RenderContent({ title: data[activeButton].title, description: data[activeButton].description, radius })
            : RenderContent
              ? RenderContent
              : <TimelineContent title={data[activeButton].title} description={data[activeButton].description} radius={radius} />
        }
      </div>
    </div >
  )
}