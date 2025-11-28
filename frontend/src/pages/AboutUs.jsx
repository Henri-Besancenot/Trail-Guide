import Template from '../components/Template'

function AboutUs() {
  return (
    <Template bannerTitle="About Us" bannerSubtitle="Learn more about our mission and team">
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to Trail Guide, your ultimate companion for discovering the most beautiful hiking trails around you. Our mission is to inspire and empower outdoor enthusiasts to explore nature's wonders while promoting responsible hiking practices.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            At Trail Guide, we believe that hiking is more than just a recreational activity; it's a way to connect with nature, improve physical and mental well-being, and foster a sense of community among hikers. Whether you're a seasoned trekker or a beginner looking for your first trail, our platform offers a diverse range of trails to suit all skill levels and preferences.
          </p>
          <p className="text-lg text-gray-700">
            Our team is passionate about the outdoors and dedicated to providing accurate, up-to-date information on trails, including difficulty ratings, user reviews, and essential tips for a safe and enjoyable hiking experience. We also prioritize environmental conservation and encourage our users to practice Leave No Trace principles to preserve the beauty of our trails for future generations.
          </p>

          <p className="text-lg text-gray-700 mt-6">
            As a basis, we use data from AllTrails, a leading platform for trail information, to ensure that our users have access to comprehensive and reliable trail data. We are committed to continuously improving our platform and expanding our trail database to better serve the hiking community.
          </p>
        </div>
      </div>
    </Template>
  );
}

export default AboutUs;