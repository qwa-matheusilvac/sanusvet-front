import type { ReactNode } from "react";

export type CardItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type Testimonial = {
  quote: string;
  author: string;
};
