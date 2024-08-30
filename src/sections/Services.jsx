import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section
      id="services"
      className="max-container flex justify-between items-center gap-9 flex-wrap"
    >
      {services.map((service) => (
        <ServiceCard {...service} key={service.label}/>
      ))}
    </section>
  );
};

export default Services;
