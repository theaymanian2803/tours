import Image from "next/image";
function page() {
  return (
    <div className=" container mx-auto">
      <div className="divider " />

      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
          <p className="text-lg">Discover our story and mission.</p>
        </div>
      </section>
      <div className="divider " />

      {/* Main Content */}
      <section className="container mx-auto py-12 flex justify-center items-center">
        <div className="flex justify-center items-center text-center">
          {/* Left Column - Text */}
          <div className=" w-[700px]">
            <h2 className="text-2xl font-semibold mb-4 ">Who We Are</h2>
            <p className="text-gray-700">
              Welcome to LuxuryCampMorocco, where we transform your travel
              dreams into unforgettable experiences. Nestled in the heart of
              Morocco, we take pride in being your trusted companion on the
              journey to creating memories that last a lifetime.
            </p>
          </div>

          {/* Right Column - Image */}
          <div>
            <Image
              src="/img/a.jpg"
              alt="About Us"
              width={500}
              height={500}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>
      <div className="divider " />

      {/* Additional Content */}
      <section className="bg-gray-100 py-12 h-2/3">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-gray-500 font-semibold text-center">
            Our Mission: Our mission is simple yet profound: to spread joy and
            ensure that every traveler who embarks on a journey with us not only
            explores the world but also discovers the happiness that comes with
            truly immersive travel experiences. What Sets Us Apart: Quality
            Tours: We believe in delivering excellence. Our handcrafted tours
            are designed with meticulous attention to detail, ensuring that
            every moment of your journey is seamless and remarkable. Sahara
            Camps: Immerse yourself in the magic of the Sahara with our
            exclusive camps. Under the vast desert sky, we offer a unique blend
            of comfort and adventure, allowing you to connect with the timeless
            beauty of the desert. Local Expertise: Our team is comprised of
            passionate locals who take pride in showcasing the rich tapestry of
            Morocco. From hidden gems to iconic landmarks, we provide you with
            an insiders perspective that goes beyond the ordinary. Customer
            Happiness: Your happiness is our priority. We go the extra mile to
            ensure that your travel experience exceeds expectations. From the
            moment you inquire about a tour to the final farewell, we are
            committed to making every step of your journey exceptional.
          </p>
        </div>
      </section>
      <div className="divider " />
      {/* Add more sections as needed */}
      <section className="container mx-auto  h-auto py-12 ">
        <div className="md:flex justify-center items-center text-center ">
          {/* Right Column - Image */}
          <div>
            <Image
              src="/img/b.jpg"
              alt="About Us"
              width={500}
              height={600}
              className="w-[600px] h-[600px]  rounded-lg object-cover"
            />
          </div>

          {/* Left Column - Text */}
          <div className="  bg-orange-500 p-8  w-1/4">
            <h2 className="text-2xl font-semibold mb-4">JOIN US</h2>
            <p className="text-white font-semibold">
              Join Us on a Journey: Whether you crave the tranquility of the
              Sahara, the bustling markets of Marrakech, or the timeless beauty
              of the Atlas Mountains, LuxuryCampMorocco invites you to embark on
              a voyage of discovery. Let us be your guide to the extraordinary,
              where each day unfolds as a new chapter in your personal travel
              story. Welcome to a world of happiness, adventure, and
              unparalleled quality. Welcome to LuxuryCampMorocco, where your
              journey begins.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
