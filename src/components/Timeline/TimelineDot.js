import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TimelineDot({ index, label, activeButton, onClick }) {
    return (_jsx("button", { className: `circle-button ${activeButton == index ? "active" : ""}`, onClick: onClick, children: _jsxs("p", { className: "circle-button__label", style: { transform: `translate(calc(-150%), -20px) scale(${activeButton == index ? "1.5" : "1"})` }, children: [_jsx("b", { children: label.split(" ")[0] }), " ", label.split(" ")[1]] }) }));
}
