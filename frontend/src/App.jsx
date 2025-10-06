import background from './assets/mountain-bg.jpg'
import Searchbar from './components/Searchbar'
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
              <h2 className="text-5xl font-bold text-white mb-4 text-shadow-[0_0px_32px_rgb(0,0,0)]">
                Welcome to Trail Guide
              </h2>
              <p className="text-xl text-white mb-5">
                Discover the most beautiful hiking trails near you
              </p>
              <div className="rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-4xl font-semibold text-white mb-4 text-shadow-[0_0px_32px_rgb(0,0,0)]">
                  Explore your next adventures
                </h3>
                <div className="flex justify-center items-center mt-5">
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