// src/components/FeaturedMembers.js

import React from 'react';
import './FeaturedMembers.css'; // Ensure you have a corresponding CSS file for styling

const FeaturedMembers = () => {
  return (
    <section className="featured-members">
      <h2>Featured Members</h2>
      <div className="member-profile">
        <h3>Einstein Mokua</h3>
        <p>Founder of KMS Sacco</p>
        <p>Phone: +254719408098</p>
        <p>
          As the founder of KMS Sacco, I am dedicated to creating a supportive financial community that empowers our members to achieve their goals. Our vision is to foster economic growth and stability through cooperative savings and lending, providing accessible financial services tailored to our members' needs. By prioritizing education, collaboration, and sustainable practices, we aim to uplift individuals and families, helping them build a brighter financial future. My role involves not only guiding our strategic initiatives but also actively engaging with our members to ensure their voices are heard and their aspirations realized. Together, we are building a thriving community rooted in trust and shared success.
        </p>
      </div>
    </section>
  );
};

export default FeaturedMembers;
