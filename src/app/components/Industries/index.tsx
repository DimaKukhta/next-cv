"use client";

import { Carousel } from "react-responsive-carousel";
import Card from "../Card";
import styles from "./styles.module.css";

type Industry = {
  id: 1;
  title: string;
  image: string;
};

const industries: Industry[] = [
  {
    id: 1,
    title: "Banking",
    image: "bank.svg",
  },
];

const IndustriesSection: React.FC = ({ ...props }) => {
  return (
    <div className={`${styles.container}`} {...props}>
      <Carousel>
        {industries.map((industry) => (
          <Card
            key={industry.id}
            title={industry.title}
            image={industry.image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default IndustriesSection;
