interface ITimelineDotProps {
  index: number;
  label: string;
  activeButton: number;
  onClick: () => void;
}

export default function TimelineDot({ index, label, activeButton, onClick }: ITimelineDotProps) {
  return (
    <button className={`circle-button ${activeButton == index ? "active" : ""}`} onClick={onClick}>
      <p className="circle-button__label" style={{ transform: `translate(calc(-150%), -20px) scale(${activeButton == index ? "1.5" : "1"})` }}>
        <b>{label.split(" ")[0]}</b> {label.split(" ")[1]}
      </p>
    </button>
  )
}