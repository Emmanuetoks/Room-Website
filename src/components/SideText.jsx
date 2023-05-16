import {ReactPropTypes} from "react"

const SideText = ({children}) => {
  return (
    <div className='main__side-text grid center-items'>
        {children}
    </div>
  )
}

// SideText.propTypes = {
//     children: ReactPropTypes.element
// }

export default SideText