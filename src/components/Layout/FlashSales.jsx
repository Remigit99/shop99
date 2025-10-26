import { cartMockData } from "../Products/mockData"
import { IoIosHeartEmpty } from "react-icons/io"
import { Link } from "react-router-dom"
import FlashProduct from "../Products/FlashProduct"

const FlashSales = () => {
    return (
        <div>
            <div className='container m-auto my-8'>

                <p className="text-secondary-2 font-semibold">Today's</p>

                <div>
                    <h2 className="text-3xl font-bold">Flash Sales</h2>
                    {/* <div className='flex items-center'>
                    <div>
                        <p>Days</p>
                        <h3>09</h3>
                        <div className='block'>:</div>
                    </div>
                    
                    <div>
                        <p>Hours</p>
                        <h3>34</h3>
                        <h2>:</h2>
                    </div>
                        
                    <div>
                        <p>Minutes</p>
                        <h3>21</h3>
                        <h2>:</h2>
                    </div>
                        
                    <div>
                        <p>Seconds</p>
                        <h3>09</h3>
                    </div>
                </div> */}

                    <div className="grid gap-8 grid-cols-1 md:grid-cols-4 lg:grid-cols-6 ">
                        {
                            cartMockData.map(item => (
                                <FlashProduct key={item.productId} item={item} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashSales