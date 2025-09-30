import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header avec menubar */}
      <Header />
      
      {/* Contenu principal */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bienvenue sur Trail Guide
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Découvrez les plus beaux sentiers de randonnée près de chez vous
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Explorez vos prochaines aventures
              </h3>
              <p className="text-gray-600">
                Utilisez la navigation ci-dessus pour découvrir nos différentes sections :
              </p>
              <ul className="mt-4 text-left text-gray-700">
                <li className="mb-2">• <strong>HomePage</strong> : Retour à l'accueil</li>
                <li className="mb-2">• <strong>Trails List</strong> : Parcourir tous les sentiers</li>
                <li className="mb-2">• <strong>About Us</strong> : En savoir plus sur nous</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;