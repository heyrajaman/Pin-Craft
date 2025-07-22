import Image from "../../components/image/image";

const Collections = () => {
  return (
    <div className="w-full grid grid-cols-7 gap-4">
      <div className="mb-8 cursor-pointer">
        <Image
          src="/pins/pin1.jpeg"
          alt=""
          className="w-full h-full object-cover rounded-[16px]"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-[16px]">Minimalist Bedrooms</h1>
          <span className="text-gray-500 text-[13px]">
            12 pins • 1 week ago
          </span>
        </div>
      </div>

      <div className="mb-8 cursor-pointer">
        <Image
          src="/pins/pin1.jpeg"
          alt=""
          className="w-full h-full object-cover rounded-[16px]"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-[16px]">Minimalist Bedrooms</h1>
          <span className="text-gray-500 text-[13px]">
            12 pins • 1 week ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collections;
