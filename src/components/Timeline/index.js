import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import TimelineContent from "./TimelineContent";
import TimelineCircle from "./TimelineCircle";
import "./TimelineStyles.css";
export default function Timeline({ data, radius = 340, RenderContent }) {
    const [activeButton, setActiveButton] = useState(0);
    // ===> Function to position button in a circular layout
    const positionButton = useCallback((radius) => {
        const buttons = document.querySelectorAll('.circle-button');
        buttons.forEach((button, index) => {
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
    const rotateCircle = (targetAngle) => {
        const container = document.querySelector('.circle-container');
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
    const handleButtonClick = (i) => {
        setActiveButton(i);
        const targetAngle = -((Math.PI * i) / data.length);
        rotateCircle(targetAngle);
        positionButton(radius);
    };
    return (_jsx("div", { className: "container", style: { backgroundImage: `url(${data[activeButton].image})`, backgroundSize: "cover" }, children: _jsxs("div", { className: "container_inner", children: [_jsx(TimelineCircle, { data: data, radius: radius, activeButton: activeButton, onClick: handleButtonClick }), typeof RenderContent === "function"
                    ? RenderContent({ title: data[activeButton].title, description: data[activeButton].description, radius })
                    : RenderContent
                        ? RenderContent
                        : _jsx(TimelineContent, { title: data[activeButton].title, description: data[activeButton].description, radius: radius })] }) }));
}
