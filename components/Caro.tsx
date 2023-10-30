import Image from "next/image";
function Caro() {
  return (
    <div className="carousel rounded-box flex justify-center wrap ">
      <div className="carousel-item">
        <Image src="/img-1.png" alt="Burger" width={300} height={300} />
      </div>
      <div className="carousel-item">
        <Image src="/boat.png" alt="Burger" width={300} height={300} />
      </div>
      <div className="carousel-item">
        <Image src="/img-2.png" alt="Burger" width={300} height={300} />
      </div>

      <div className="carousel-item">
        <Image src="/boat.png" alt="Burger" width={300} height={300} />
      </div>

      <div className="carousel-item">
        <Image src="/boat.png" alt="Burger" width={300} height={300} />
      </div>
    </div>
  );
}

export default Caro;
