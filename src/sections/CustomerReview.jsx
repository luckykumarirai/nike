import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/index";
const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customer</span>Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Finally found the perfect solution! This product has made my life so
        much easier. From its user-friendly design to its impressive results, I
        could not be happier with my decision to buy.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly item-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.cutomerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
