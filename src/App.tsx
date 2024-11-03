import Timeline from './components/Timeline';
import { CAROUSEL_DATA } from './constants/mockData';

function App() {
  return (
    <section id="timeline">
      <Timeline data={CAROUSEL_DATA} />
    </section>
  )
}

export default App
