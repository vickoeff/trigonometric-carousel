import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [radius, setRadius] = useState<number>(240);
  const [activeButton, setActiveButton] = useState<number>(0);

  const data = [
    {
      label: "3312 R.E.G",
      title: "1 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum."
    },

    {
      label: "1425 R.E.G",
      title: "2 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum."
    },

    {
      label: "3388 R.E.G",
      title: "3 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum."
    },

    {
      label: "3345 R.E.G",
      title: "4 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum."
    },

    {
      label: "2134 R.E.G",
      title: "5 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum."
    },

    {
      label: "8902 R.E.G",
      title: "6 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum."
    },

    {
      label: "4231 R.E.G",
      title: "7 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum."
    },

    {
      label: "5324 R.E.G",
      title: "8 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum."
    }
  ]

  // Function to position button in a circular layout
  const positionButton = useCallback((radius: number) => {
    const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.circle-button');

    // Initial layout
    buttons.forEach((button: HTMLButtonElement, index) => {
      const angle = (2 * Math.PI * index) / data.length;
      const x = radius * Math.cos(angle);

      const y = radius * Math.sin(angle);
      button.style.transform = `translate(${x}px, ${y}px) rotate(${((2 * Math.PI * activeButton) / data.length)}rad)`;
    });
  }, [activeButton]);

  useEffect(() => {
    positionButton(radius);
  }, [radius, positionButton]);


  // Function to rotate the circle
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

  const handleButtonClick = (i: number) => {
    setActiveButton(i);

    const targetAngle = -((2 * Math.PI * i) / data.length);
    rotateCircle(targetAngle);

    positionButton(radius);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "start", position: "relative", width: "100%" }}>
        <div className="circle-container">
          {data.map(
            (_, i) => (<button className={`circle-button ${activeButton == i ? "active" : ""}`} onClick={() => handleButtonClick(i)}>
              <p style={{ position: "absolute", width: "80px", transform: `translate(calc(-150%), -20px) scale(${activeButton == i ? "1.5" : "1"})`, transition: "0.5s" }}>{_.label}</p>
            </button>)
          )
          }
        </div>
        <div className="content">
          <h2 style={{ textAlign: "center" }}>{data[activeButton].title}</h2>
          <p style={{ textAlign: "center" }}>{data[activeButton].desc}</p>
        </div>
      </div>
    </div>
  )
}

export default App
