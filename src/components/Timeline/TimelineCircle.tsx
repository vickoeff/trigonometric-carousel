import TimelineDot from "./TimelineDot";

interface ITimelineCircleProps {
  data: {
    label: string;
    title: string;
    description: string;
    image: string;
  }[];
  activeButton: number;
  onClick: (index: number) => void;
}

export default function TimelineCircle({ data, activeButton, onClick }: ITimelineCircleProps) {
  return (
    <div className="circle-container">
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