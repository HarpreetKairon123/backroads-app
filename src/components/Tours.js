import Title from "./Title";
import { tours } from "../Data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured " subtitle={"tours"} />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour key={id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
