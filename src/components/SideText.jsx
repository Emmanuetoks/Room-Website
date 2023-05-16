import { Link } from 'react-router-dom'
import arrowImg from '../../public/assets/images/icon-arrow.svg'

const SideText = ({ children, heading, bodyText }) => {
    const slideBack = (e) => {
        
    }

    const slideFoward = (e) => {
        
    }
    return (
        <div className='main__side-text grid center-items bg-white pos-rel'>
            <article>
                <h1 className="fw-500 clr-black">{heading}</h1>
                <p className="fw-200 text-accent-100" style={{ 'marginBlock': '2rem' }}>{bodyText}</p>
                {children}
                <a className="fw-300 clr-black flex shop-now uppercase" style={{ 'letterSpacing': '10px', 'cursor': 'pointer', 'alignItems': 'center', '--gap': '1rem' }}>shop now
                    <span>
                        <img src={arrowImg} />
                    </span>
                </a>
            </article>
            <div className='slider-bar flex pos-abs bg-black' style={{ '--gap': 'rem' }}>
                <Link className='slide-link' to={'/3'}>
                    <button className='slide-btn bg-black btn-left'>

                        <span className='sr-only'>btn right</span>
                    </button>
                </Link>

                <Link className='slide-link' to={'/2'}>
                    <button className='slide-btn bg-black btn-right'>
                        <span className='sr-only'>btn left</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SideText