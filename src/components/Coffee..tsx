import { coffee } from "../utils/interfaces"
import starFill from "../assets/Star_fill.svg"
import star from "../assets/Star.svg"

const Coffee = ({
  name,
  available,
  image,
  popular,
  price,
  rating,
  votes
} : coffee) => {
  return (
    <li className="relative">
      <img 
        src={image}
        alt={`${name} coffee image`}
        className="rounded-md"
      />
      <div className="my-2 flex justify-between items-center">
        <h3 className="text-[#FEF7EE] font-semibold">{name}</h3>
        <p className="py-1 px-2 bg-[#BEE3CC] rounded-md text-sm font-medium">
          {price}
        </p>
      </div>
      <div className="flex justify-between font-sans">
        {rating && <div className="flex gap-1 items-center">
          <img 
            src={starFill} 
            alt="Star fill image" 
          />
          <p className="text-[#FEF7EE] font-semibold text-sm">
            {rating} <span className="text-[#6F757C]">({votes} votes)</span>
          </p>
        </div>}

        {!rating && <div className="flex gap-1 items-center">
          <img 
            src={star} 
            alt="Star image" 
          />
          <p className="text-[#6F757C] font-semibold text-sm">
            No ratings
          </p>
        </div>}

        {!available && <p className="text-sm font-semibold text-[#ED735D]">
          Sold out
        </p>}
      </div>

      {popular && <p className="absolute top-2 left-2 text-xs font-medium bg-[#F6C768] py-0.5 px-2 rounded-xl text-[#111315]">
        Popular
      </p>}
    </li>
  )
}

export default Coffee