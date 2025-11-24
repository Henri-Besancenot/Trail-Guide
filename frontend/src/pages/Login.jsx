import Template from '../components/Template'
import LoginUI from '../components/LoginUI'
// import SignUp from '../components/SignUp'
import { Link } from 'react-router-dom';


function Login() {
  return (
    <Template bannerTitle="Login or Sign Up" bannerSubtitle="Join us to share your own trails">
      <div className="bg-white p-6 flex flex-col gap-2">
        <LoginUI/>
        <Link to="/signup" className="text-center text-blue-500 hover:underline">
          Don't have an account? Sign Up
        </Link>
      </div>
    </Template>
  );
}

export default Login;