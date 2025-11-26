import Template from '../components/Template'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import Carousel from '@/components/Carousel';

function MyProfile() {
  const { user } = useContext(AuthContext);

  return (
    <Template bannerTitle={""} bannerSubtitle="Member of Trail Guide">
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Information section about the user */}
          <div className="bg-gray-50 shadow overflow-hidden sm:rounded-lg mb-10">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Profile Information
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Personal details and application.
                </p>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Edit Profile
              </button>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.name || "Guest User"}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.email || "guest@example.com"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Section about the hike that the user has completed or is interested in */}
          <Carousel title="Favorite Hikes" hikeIds= {[1,2,3]} />


          {/* Section about the hikes that the user created */}
          <Carousel title="Created Hikes" hikeIds= {[1,2]} addButton={true} />
          
        </div>
      </div>
    </Template>
  );
}

export default MyProfile;