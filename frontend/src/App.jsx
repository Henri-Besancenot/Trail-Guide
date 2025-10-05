import Header from './components/Header'
import background from './assets/mountain-bg.jpg'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import Banner from './components/Banner'

import Template from './components/Template'



function App() {
  return (
    <Template showBanner={false}>
      {/* Main content with background */}
      <div
        className="flex-1"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          flex: 1,
        }}
      >
        <main className='h-screen'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to Trail Guide
              </h2>
              <p className="text-xl text-white mb-5">
                Discover the most beautiful hiking trails near you
              </p>
              <div className="rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Explore your next adventures
                </h3>
                <div className="flex justify-center items-center" style={{ marginTop: '20px'}}>
                  <Searchbar
                    onSearch={(query) => console.log(query)}
                    className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Template>
  );
}

export default App;