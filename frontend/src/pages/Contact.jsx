import Template from '../components/Template'
import profilPicture from '@/assets/defaultprofilpicture.png'

function Contact() {
  return (
    <Template bannerTitle="Contact" bannerSubtitle="Get in touch with us">
        <div className="bg-[#F3F3EB] px-8 py-4">
        {/* Our contact */}
        <div className="grid grid-cols-3 flex-1 bg-[#F3F3EB] w-full rounded-lg p-8 justify-items-center">

            {/* Henri */}
            <div className="bg-white w-3/4 rounded-lg p-6 flex flex-col items-center transform transition duration-200 hover:scale-105 hover:shadow-xl">
                <img src={profilPicture} alt="Henri Besancenot" className="rounded-full w-24 h-24 mb-4"/>
                <h2 className="text-2xl font-bold mb-2">Henri Besancenot</h2>
                <p className="">Frontend developer</p><br/>

                <h2 className="font-bold mb-2">Contact</h2>
                <a href="mailto:henri.besancenot@aalto.fi" className="hover:underline">
                    henri.besancenot@aalto.fi
                </a>
            </div>

            {/* Sarah */}
            <div className="bg-white w-3/4 rounded-lg p-6 flex flex-col items-center transform transition duration-200 hover:scale-105 hover:shadow-xl">
                <img src={profilPicture} alt="Sarah Dos Santos" className="rounded-full w-24 h-24 mb-4"/>
                <h2 className="text-2xl font-bold mb-2">Sarah Dos Santos</h2>
                <p className="">Frontend developer</p><br/>

                <h2 className="font-bold mb-2">Contact</h2>
                <a href="mailto:sarah.dossantos@aalto.fi" className="hover:underline">
                    sarah.dossantos@aalto.fi
                </a>
            </div>

            {/* Sibylle */}
            <div className="bg-white w-3/4 rounded-lg p-6 flex flex-col items-center transform transition duration-200 hover:scale-105 hover:shadow-xl">
                <img src={profilPicture} alt="Sibylle Azeau" className="rounded-full w-24 h-24 mb-4"/>
                <h2 className="text-2xl font-bold mb-2">Sibylle Azeau</h2>
                <p className="">Backend developer</p><br/>

                <h2 className="font-bold mb-2">Contact</h2>
                <a href="mailto:sibylle.azeau@aalto.fi" className="hover:underline">
                    sibylle.azeau@aalto.fi
                </a>
            </div>

        </div>

        {/* Small presentation of us */}
        <div className="mt-12 p-8 rounded-lg">
            <p className="text-xl text-justify ">We are a team of french exchange students at Aalto University dedicated to creating an exceptional trail guide experience. 
            Our mission is to help outdoor enthusiasts discover and explore the best trails around them. 
            Whether you're a seasoned hiker or just starting out, we're here to provide you with the resources and information you need for your next adventure!
            </p>
        </div>

        {/* Feedback */}
        <div className= "bg-[#F3F3EB] flex flex-col items-center mt-12 mb-12 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">We value your feedback!</h2>
            <textarea placeholder="Your feedback" className="w-2/3 p-2 border border-gray-300 bg-white rounded-lg mb-4"/>
            <a href="mailto::">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Send us your feedback
                </button>
            </a>
        </div>
        </div>
      
    </Template>
  );
}

export default Contact;