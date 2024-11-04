import useMediaScreen from "../../hooks/useMediaScreen";

interface ITimelineContentProps {
  title: string;
  description: string;
  radius?: number;
}

export default function TimelineContent({ title, description, radius = 200 }: ITimelineContentProps) {
  const { isMobile } = useMediaScreen();

  return (
    <div className="content" style={{ top: isMobile ? radius * 1.7 : 0 }}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <p style={{ textAlign: "center" }}>{description}</p>
    </div>
  )
}