type Card = {
  id: number;
  name: string;
  designation?: string;
  content: React.ReactNode;
};

type CardStackProps = {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  title: string;
};
