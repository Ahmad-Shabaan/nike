import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h2 className="capitalize text-4xl font-palanquin leading-normal font-bold text-center">
        What our <span className="text-coral-red">Customers</span> say?
      </h2>
      <p className="mt-4 info-text text-center lg:max-w-lg m-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae odio
        neque nihil libero sapiente cupiditate ducimus obcaecati molestiae natus
        dolores omnis totam, voluptatem culpa enim, labore sequi, reiciendis
        architecto blanditiis.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review}  />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
