import Title from "./Title";
import { services } from "../Data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle=" services" />

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;

          return <Service key={id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
