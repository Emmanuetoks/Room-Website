const SideText = ({ children, heading, bodyText }) => {
    return (
        <div className='main__side-text grid center-items bg-white'>
            <article>
                <h1 className="fw-500 clr-black">{heading}</h1>
                <p className="fw-200 text-accent-100" style={{'marginBlock': '2rem'}}>{bodyText}</p>
                {children}
            </article> 

        </div>
    )
}

export default SideText