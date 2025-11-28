import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

function Template({ children, bannerTitle, bannerSubtitle, showBanner = true }) {
    return (
        <div className="min-h-screen w-full flex flex-col">
            {/* Header with menubar */}
            <Header />

            {/* Banner with conditional rendering */}
            {showBanner && <Banner title={bannerTitle} subtitle={bannerSubtitle} />}
            
            {/* Additional content passed as children */}
            <main className="flex-grow">
                {children}
            </main>

            {/* This div will be below the background image */}
            <Footer />   
        </div>
    );
}

export default Template;