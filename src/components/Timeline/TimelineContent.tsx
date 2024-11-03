interface ITimelineContentProps {
  title: string;
  description: string;
}

export default function TimelineContent({ title, description }: ITimelineContentProps) {
  return (
    <div className="content">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <p style={{ textAlign: "center" }}>{description}</p>
    </div>
  )
}