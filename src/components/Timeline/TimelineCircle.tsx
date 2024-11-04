import TimelineDot from "./TimelineDot";

interface ITimelineCircleProps {
  data: {
    label: string;
    title: string;
    description: string;
    image: string;
  }[];
  radius: number;
  activeButton: number;
  onClick: (index: number) => void;
}

export default function TimelineCircle({ data, radius, activeButton, onClick }: ITimelineCircleProps) {
  return (
    <div className="circle-container">
      <div className="circle-container__circle" style={{ width: `${radius}%`, height: `${radius}%` }}></div>
      {
        data.map(
          (_, i) => (
            <TimelineDot key={_.label} index={i} label={_.label} activeButton={activeButton} onClick={() => onClick(i)} />
          )
        )
      }
    </div>
  )
}