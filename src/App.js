import { jsx as _jsx } from "react/jsx-runtime";
import Timeline from './components/Timeline';
import { CAROUSEL_DATA } from './constants/mockData';
import useMediaScreen from './hooks/useMediaScreen';
function App() {
    const { isMobile } = useMediaScreen();
    return (_jsx("section", { id: "timeline", children: _jsx(Timeline, { data: CAROUSEL_DATA, radius: isMobile ? 200 : 340 }) }));
}
export default App;
