import React from 'react'

const FlashSales = () => {
  return (
    <div>
        <div className='container m-auto'>

            <p>Today's</p>

            <div>
                <h2>Flash Sales</h2>
                <div className='flex items-center'>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlashSales