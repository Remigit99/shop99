
import {IoMdClose} from "react-icons/io"

const CartDrawer = ({drawerOpen, toggleDrawer}) => {
  return (
    <div>

      <div>
        {
            drawerOpen ?
 <button onClick={toggleDrawer}>
          <IoMdClose />
        </button>
        :
        <p>Hi</p>
        }
       
      </div>

    </div>
  )
}

export default CartDrawer