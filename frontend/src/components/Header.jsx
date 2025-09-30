import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@/components/ui/menubar"

function Header() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Trail Guide</h1>
          </div>
          
          {/* Navigation Menu */}
          <Menubar className="border-0 bg-transparent shadow-none">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100">
                HomePage
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => console.log('Navigate to Home')}>
                  Accueil
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Dashboard')}>
                  Tableau de bord
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100">
                Trails List
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => console.log('Navigate to All Trails')}>
                  Tous les sentiers
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Popular Trails')}>
                  Sentiers populaires
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Nearby Trails')}>
                  Sentiers à proximité
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer hover:bg-gray-100 data-[state=open]:bg-gray-100">
                About Us
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => console.log('Navigate to About')}>
                  À propos
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Contact')}>
                  Contact
                </MenubarItem>
                <MenubarItem onClick={() => console.log('Navigate to Team')}>
                  Notre équipe
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