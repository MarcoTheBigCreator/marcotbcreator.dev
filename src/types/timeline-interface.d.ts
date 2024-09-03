interface TimelineInfo {
  date: string;
  title: string;
  place: string;
  description: string;
}

interface TimelineProps {
  timelineTitle: string;
  info: TimelineInfo[];
}
