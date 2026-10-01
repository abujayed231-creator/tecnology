import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="min-h-100 my-7 flex justify-center items-center">
      <div>
        <h2 className="font-bold text-4xl text-black">
          Build Your Ideal
        </h2>

        <h2 className="font-bold text-4xl bg-gradient-to-r from-red-500 to-purple-400 bg-clip-text text-transparent">
          Development Stack
        </h2>

        <p className="text-gray-600 mt-2">
          Explore frontend, backend, database and tooling options
        </p>
        <div className="flex gap-4">
         <button
  className="inline-block cursor-pointer rounded-md bg-purple-500 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
  Tecnologys Explore
</button>
          <button className="btn">Learn More</button>

      </div>
       
</div>
        <div>
          <img src={banner} alt="banner" />
        </div>
    
    </div>
  );
};

export default Banner;