import Template from '../components/Template'
import Login from '../components/Login'
import SignUp from '../components/SignUp'


function LoginSignUp() {
  return (
    <Template bannerTitle="Login or Sign Up" bannerSubtitle="Join us to share your own trails">
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Login className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"/>
        <SignUp className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"/>
        </div>
      </div>
    </Template>
  );
}

export default LoginSignUp;