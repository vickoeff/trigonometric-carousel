import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [radius, setRadius] = useState<number>(340);
  const [activeButton, setActiveButton] = useState<number>(0);

  const data = [
    {
      label: "3312 R.E.G",
      title: "Black Myth: Wukong",
      desc: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
      img: "../public/wukong.jpg"
    },

    {
      label: "1425 R.E.G",
      title: "Monster Hunter Wilds",
      desc: "Capcom dropped the gameplay trailer for Monster Hunter Wilds during the PlayStation State of Play stream, and true to its name, it looks pretty wild. A number of seemingly important characters were introduced, with a pretty grim way to start the story of the game – quite unlike the hopeful tone that World set in its opening moments. Of course, I’ll be ignoring most of that. This video shows gameplay after all, so let’s focus on that instead. And one of the first takeaways is the merging of the Tailrider system from World and the Palamutes from Rise in Monster Hunter Wilds, in the form of the Seikret.",
      img: "/monster-hunter.jpg"
    },

    {
      label: "3388 R.E.G",
      title: "3 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum.",
      img: "/wukong.jpg"
    },

    {
      label: "3345 R.E.G",
      title: "4 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum.",
      img: "/wukong.jpg"
    },

    {
      label: "2134 R.E.G",
      title: "5 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum.",
      img: "/wukong.jpg"
    },

    {
      label: "8902 R.E.G",
      title: "6 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum.",
      img: "/wukong.jpg"
    },

    {
      label: "4231 R.E.G",
      title: "7 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum.",
      img: "/wukong.jpg"
    },

    {
      label: "5324 R.E.G",
      title: "8 Lorem",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tenetur aliquam similique, laborum rem tempore. Unde, quaerat quisquam dolore delectus optio pariatur a ducimus reiciendis aliquid accusantium adipisci officia laborum.",
      img: "/wukong.jpg"
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
    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url(${data[activeButton].img})`, backgroundSize: "cover" }}>
      <div style={{ display: "flex", justifyContent: "start", position: "relative", width: "100%" }}>
        <div className="circle-container">
          {
            data.map(
              (_, i) => (
                <button className={`circle-button ${activeButton == i ? "active" : ""}`} onClick={() => handleButtonClick(i)}>
                  <p style={{ position: "absolute", width: "80px", transform: `translate(calc(-150%), -20px) scale(${activeButton == i ? "1.5" : "1"})`, transition: "0.5s" }}>
                    <b>{_.label.split(" ")[0]}</b> {_.label.split(" ")[1]}
                  </p>
                </button>
              )
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
