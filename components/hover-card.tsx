interface HoverCardProps {
    title: string;
}

export default function HoverCard({ title }: HoverCardProps) {
  return (
    <div className=" bg-gray-800 rounded-full px-2">
      <h2>{title}</h2>
    </div>
  );
}
