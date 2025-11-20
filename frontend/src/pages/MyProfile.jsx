import Template from '../components/Template'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"

function MyProfile() {
    const { user } = useContext(AuthContext);

  return (
    <Template bannerTitle={user.name} bannerSubtitle="Member of Trail Guide">
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        </div>
      </div>
    </Template>
  );
}

export default MyProfile;