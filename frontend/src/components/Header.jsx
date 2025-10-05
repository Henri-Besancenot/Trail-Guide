import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar"

function Header() {
  return (
    <header className="w-full bg-[#F3F3EB] backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Trail Guide Logo" className="h-8 mr-2" /> 
            <h1 className="text-2xl font-bold text-gray-900">Trail Guide</h1>
          </div>
          
          {/* Navigation Menu */}
          <Menubar className="border-0 bg-[#F3F3EB] shadow-none">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100">
                Homepage
              </MenubarTrigger>
              <MenubarContent className="bg-white">
                <MenubarItem onClick={() => console.log('Navigate to Home')}>
                  Home
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Dashboard')}>
                  Dashboard
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100">
                Trails List
              </MenubarTrigger>
              <MenubarContent className="bg-white">
                <MenubarItem onClick={() => console.log('Navigate to All Trails')}>
                  All Trails
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Popular Trails')}>
                  Popular Trails
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Nearby Trails')}>
                  Nearby Trails
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100">
                About Us
              </MenubarTrigger>
              <MenubarContent className="bg-white">
                <MenubarItem onClick={() => console.log('Navigate to About')}>
                  About
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Contact')}>
                  Contact
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Team')}>
                  Our Team
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  )
}

export default Header