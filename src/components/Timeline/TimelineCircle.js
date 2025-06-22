import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TimelineDot from "./TimelineDot";
export default function TimelineCircle({ data, radius, activeButton, onClick }) {
    return (_jsxs("div", { className: "circle-container", children: [_jsx("div", { className: "circle-container__circle", style: { width: `${radius}%`, height: `${radius}%` } }), data.map((_, i) => (_jsx(TimelineDot, { index: i, label: _.label, activeButton: activeButton, onClick: () => onClick(i) }, _.label)))] }));
}
