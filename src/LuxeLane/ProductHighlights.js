import React, { useEffect } from "react";

import "./ProductHighlights.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ProductHighlights = () => {
     useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div className="product-highlights container mt-4">
      <h2 className="mb-4 fw-bold">✨ Product Highlights</h2>

      <div className="mb-4" data-aos="fade-up">
        <h5>
          <i className="bi bi-suitcase2-fill me-2 text-primary"></i>Travel
          Edition
        </h5>
        <p>
          Simplify your travel routine with products that keep you fresh and
          fashionable throughout the journey. Wander without laundry, wander
          with style, Traveling light, but not compromising on style! Embrace
          the freedom of limited products and forget daily washing worries
        </p>
      </div>

      <div className="mb-4" data-aos="fade-up">
        <h5>
          <i className="bi bi-cloud-snow me-2 text-info"></i>Cold Weather
          Protection
        </h5>
        <p>
          Embrace the chill without compromising on comfort. Our cold-weather
          protection is crafted to keep you warm and cozy even on the frostiest
          days, ensuring that you can face the winter in style and with
          confidence. Designed with advanced insulation and thoughtful details,
          it’s your perfect companion for braving the elements.
        </p>
      </div>
 
      <div className="mb-4" data-aos="fade-up">
        <h5>
          <i className="bi bi-droplet me-2 text-danger"></i>Anti-Stain
        </h5>
        <p>
          Our products are designed to resist the absorption of water-based
          stains, such as those from tea and coffee. We have added special
          coatings that repel liquids and make it easier to remove stains while
          wiping them.
        </p>
      </div>

      <div className="mb-4" data-aos="fade-up">
        <h5>
          <i className="bi bi-wind me-2 text-secondary"></i>Anti-Odor
        </h5>
        <p>
          Our products are treated to prevent the growth of bacteria, which can
          cause unpleasant smell. Our products are moisture-wicking and
          quick-drying, which can help to reduce the buildup of bacteria and
          odors.
        </p>
      </div>

      <div className="mb-4" data-aos="fade-up">
        <h5>
          <i className="bi bi-droplet-half me-2 text-primary"></i>Water
          Repellent
        </h5>
        <p>
          The treatment on our products creates a barrier on the fabric surface
          which causes water droplets to bead up and roll off the material, this
          helps to maintain the breathability of the fabric too.
        </p>
      </div>

      <div className="mb-4" data-aos="fade-up">
        <h5>
          <i className="bi bi-cloud me-2 text-success"></i>Breathable Fabric
        </h5>
        <p>
          The breathable fabrics used in Turms Intelligent Apparels are
          carefully selected and tested to ensure they provide the best possible
          experience. These fabrics help to regulate body temperature and keep
          the wearer cool, dry, and comfortable, even during intense physical
          activity.
        </p>
      </div>
    </div>
  );
};

export default ProductHighlights;
