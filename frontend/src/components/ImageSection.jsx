import React from "react";

const ImageSection = () => {
  return (
    <div className="bg-black">
      <div className="bg-black text-white first-letter px-20 pt-10  font-semibold text-4xl">
        <p>Your Stay, Our Pleasure</p>
      </div>
      <div className="bg-black text-black flex px-20 py-10 pb-20 gap-10">
        <div className="w-96 h-80 flex overflow-hidden ">
          <p className="absolute text-4xl font-bold p-2  ">Resorts</p>

          <img
            src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698537600&semt=ais"
            alt=""
            className="  hover:scale-125 rounded-2xl overflow-hidden"
          />
        </div>
        <div className="w-96 h-80 flex overflow-hidden  ">
          <p className="absolute text-4xl font-bold  p-2 ">Rentals</p>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=1200"
            alt=""
            className=" hover:scale-125 rounded-2xl overflow-hidden"
          />
        </div>
        <div className="w-96 h-80 flex overflow-hidden  ">
          <p className="absolute text-4xl font-bold  p-2 ">Beach Side View</p>

          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-948238209740182923/original/45fd0d30-d2b8-4028-b7d5-646397898b12.jpeg?im_w=1200"
            alt=""
            className="  hover:scale-125 rounded-2xl overflow-hidden"
          />
        </div>
        <div className="w-96 h-80 flex overflow-hidden  ">
          <p className="absolute text-4xl font-bold  p-2 ">Hill Station</p>

          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53408947/original/fa04d4b3-76b7-4b46-97fe-e1e2721f5e44.jpeg?im_w=1200"
            alt=""
            className="  hover:scale-125 rounded-2xl overflow-hidden"
          />
        </div>

        <div className="w-96 h-80 flex overflow-hidden  ">
          <p className="absolute text-4xl font-bold  p-2 ">Tree House</p>

          <img
            src="https://a0.muscache.com/im/pictures/1c360e12-97fe-4bc0-8180-330e270e0483.jpg?im_w=1200"
            alt=""
            className="rounded-2xl  hover:scale-125 overflow-hidden"
          />
        </div>
        {/* <img src='https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg' alt='' className='rounded-2xl overflow-hidden'/> */}
      </div>
    </div>
  );
};

export default ImageSection;
