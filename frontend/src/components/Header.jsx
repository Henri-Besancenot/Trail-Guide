import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar"
import { Link } from "react-router-dom"
import logo from "@/assets/logo.png"
import defaultProfilePic from "@/assets/defaultprofilpicture.png"
import { useAuthStore } from "../store/authStore"

function Header() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="w-full bg-[#F3F3EB] backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Trail Guide Logo" className="h-8 mr-2" /> 
            <h1 className="text-2xl font-bold text-gray-900">Trail Guide</h1>
          </Link>
                
          {/* Navigation Menu */}
          <Menubar className="border-0 bg-[#F3F3EB] shadow-none">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              Home
            </Link>

            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100">
                Trails List
              </MenubarTrigger>
              <MenubarContent className="bg-white">
                <MenubarItem onClick={() => console.log('Navigate to All Trails')}>
                  <Link to="/trails/all">All Trails</Link>
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Popular Trails')}>
                  <Link to="/trails/popular">Popular Trails</Link>
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Nearby Trails')}>
                  <Link to="/trails/nearby">Nearby Trails</Link>
                </MenubarItem>
                {user && (
                  <MenubarItem onClick={() => console.log('Create New Trail')}>
                    <Link to="/trails/new">Create New Trail</Link>
                  </MenubarItem>
                )}
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100">
                About Us
              </MenubarTrigger>
              <MenubarContent className="bg-white">
                <MenubarItem onClick={() => console.log('Navigate to About')}>
                <Link to="/aboutus">About</Link>
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Contact')}>
                  <Link to="/contact">Contact</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {!user ? (
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100">
                  <img src={defaultProfilePic} alt="Login" className="h-8 w-8 rounded-full" />
                </MenubarTrigger>
                <MenubarContent className="bg-white">
                  <MenubarItem onClick={() => console.log('Navigate to Login')}>
                    <Link to="/login">Login</Link>
                  </MenubarItem>
                  <MenubarItem onClick={() => console.log('Navigate to Sign Up')}>
                    <Link to="/signup">Sign Up</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              
            ) : (
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100 h-auto py-1">
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <img 
                      src={user.picture ? user.picture : defaultProfilePic} 
                      alt="Profile"
                      className="h-8 w-8 rounded-full object-cover" 
                    />
                    <span className="text-xs">{user.name}</span>
                  </div>
                </MenubarTrigger>
                <MenubarContent className="bg-white">
                  <MenubarItem onClick={() => console.log('Navigate to My profile')}>
                  <Link to={`/users/${user._id}`}>My profile</Link>
                  </MenubarItem>
                  <MenubarItem onClick={logout}>
                    <Link to="/login">Logout</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            )}
          </Menubar>
        </div>
      </div>
    </header>
  )
}

export default Header