import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"

const Topbar = () => {
  return (
    <div className="py-2 bg-black w-full">
      <div className="container  flex justify-between items-center mx-auto text-white">

        <div className=" flex gap-1.5 space-x-2">
          <a href="#" >
            <TbBrandMeta className="" />
          </a>
          <a href="#" >
            <IoLogoInstagram />
          </a>
          <a href="#" >
            <RiTwitterXLine />
          </a>

        </div>

        <div className=" flex justify-between align-center">
          <div className="flex justify-center item-center gap-2">
            <p className="text-[12px]"> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
            <p className="text-[12px] font-bold">Shop Now </p>
          </div>
        </div>
        <div>
          <select className="border-none outline-0 bg-black text-white" >
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Arabic</option>
            <option>Yoruba</option>
          </select>
        </div>
      </div>

    </div>
  )
}

export default Topbar