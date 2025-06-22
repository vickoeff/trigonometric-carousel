import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useMediaScreen from "../../hooks/useMediaScreen";
export default function TimelineContent({ title, description, radius = 200 }) {
    const { isMobile } = useMediaScreen();
    return (_jsxs("div", { className: "content", style: { top: isMobile ? radius * 1.7 : 0 }, children: [_jsx("h2", { style: { textAlign: "center" }, children: title }), _jsx("p", { style: { textAlign: "center" }, children: description })] }));
}
