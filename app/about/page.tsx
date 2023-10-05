import Image from 'next/image';

function page() {
    return (
        <div>
    
          {/* Hero Section */}
          <section className="bg-blue-500 text-white py-16">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
              <p className="text-lg">Discover our story and mission.</p>
            </div>
          </section>
    
          {/* Main Content */}
          <section className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              {/* Left Column - Text */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ligula a ipsum
                  iaculis, at aliquam tortor condimentum. Duis egestas euismod dui a eleifend.
                </p>
              </div>
    
              {/* Right Column - Image */}
              <div>
                <Image src="/img/a.jpg" alt="About Us" width={500} height={500} className="w-full rounded-lg" />
              </div>
            </div>
          </section>
    
          {/* Additional Content */}
          <section className="bg-gray-100 py-12">
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ligula a ipsum iaculis,
                at aliquam tortor condimentum. Duis egestas euismod dui a eleifend.
              </p>
            </div>
          </section>
          {/* Add more sections as needed */}
          <section className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
             
    
              {/* Right Column - Image */}
              <div>
                <Image src="/img/b.jpg" alt="About Us" width={500} height={500} className="w-full rounded-lg" />
              </div>

               {/* Left Column - Text */}
               <div>
                <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ligula a ipsum
                  iaculis, at aliquam tortor condimentum. Duis egestas euismod dui a eleifend.
                </p>
              </div>
            </div>
          </section>
        </div>
      );
}

export default page