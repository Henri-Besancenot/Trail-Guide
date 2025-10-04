import Header from './components/Header'
import background from './assets/mountain-bg.jpg'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header with menubar */}
      <Header />

      {/* Main content with background */}
      <div
        className="flex-1"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          flex: 1,
        }}
      >
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to Trail Guide
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover the most beautiful hiking trails near you
              </p>
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Explore your next adventures
                </h3>
                {/* Styled Searchbar */}
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
      <Footer />
    </div>
  );
}

export default App;