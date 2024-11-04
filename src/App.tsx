import Timeline from './components/Timeline';
import { CAROUSEL_DATA } from './constants/mockData';
import useMediaScreen from './hooks/useMediaScreen';

function App() {
  const { isMobile } = useMediaScreen();

  return (
    <section id="timeline">
      <Timeline data={CAROUSEL_DATA} radius={isMobile ? 200 : 340} />
    </section>
  )
}

export default App
