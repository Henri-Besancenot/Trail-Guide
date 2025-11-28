import Template from '../components/Template'
// import LoginUI from '../components/LoginUI'
import SignUpUI from '../components/SignUpUI'
import { Link } from 'react-router-dom';


function SignUp() {
  return (
    <Template bannerTitle="Login or Sign Up" bannerSubtitle="Join us to share your own trails">
      <div className="bg-white p-6 flex flex-col gap-2">
        <SignUpUI/>
        <Link to="/login" className="text-center text-blue-500 hover:underline">
          Already have an account? Login
        </Link>
      </div>
    </Template>
  );
}

export default SignUp;