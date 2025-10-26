import { IoIosHeartEmpty } from "react-icons/io"
import { Link } from "react-router-dom"

const FlashProduct = ({ item }) => {
    return (
        <article>
            <div className="relative">
                <span className="absolute top-2 left-1 bg-secondary-2 text-white text-[12px] p-1 rounded-sm">  -40%</span>
                <div className="absolute top-2 right-1 flex flex-col gap-2">

                    <IoIosHeartEmpty className='text-xl' />
                    <IoIosHeartEmpty className='text-xl' />
                </div>
                <Link to="/" className="bg-black w-full absolute bottom-0 left-0 right-0 text-white text-center">Add To Cart</Link>
                <img src={item.image} alt={item.name} />
            </div>

            <div>
                <h3 className="font-semibold text-[18px]">{item.name}</h3>
                <div className="flex gap-4">
                    <p className="line-through text-gray-400">${item.oldPrice}</p>
                    <p>${item.price}</p>
                </div>
            </div>
        </article>
    )
}

export default FlashProduct