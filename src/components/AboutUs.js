import React from 'react';

function AboutUs() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Contoso Traders</h1>
      <div className="row">
        <div className="col-12">
          <h2>Our Story</h2>
          <p>
            Contoso Traders is a modern e-commerce platform dedicated to providing high-quality products 
            and exceptional shopping experiences to our customers. As a technology-first company, we leverage 
            cutting-edge solutions to create seamless, secure, and enjoyable shopping journeys.
          </p>
          
          <h2 className="mt-4">Our Mission</h2>
          <p>
            Our mission is to revolutionize online shopping by combining innovative technology with 
            customer-centric service. We strive to create a platform that not only meets but exceeds 
            our customers' expectations through:
          </p>
          <ul>
            <li>Intuitive shopping experience</li>
            <li>Secure and reliable transactions</li>
            <li>High-quality product selection</li>
            <li>Exceptional customer service</li>
          </ul>

          <h2 className="mt-4">Technology Stack</h2>
          <p>
            We pride ourselves on using modern technology to power our platform:
          </p>
          <ul>
            <li>React-based frontend for smooth user interactions</li>
            <li>.NET microservices architecture for robust backend operations</li>
            <li>Advanced security measures to protect customer data</li>
            <li>Cloud-native infrastructure for scalability and reliability</li>
          </ul>

          <h2 className="mt-4">Join Our Journey</h2>
          <p>
            We're constantly evolving and improving our platform to better serve our customers. 
            Thank you for being part of our journey in revolutionizing online shopping.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
