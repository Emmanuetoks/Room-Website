const useSideText = () => {
    const homeText = {
        slide1: {
            heading: 'Discover innovative ways to decorate',

            paragraphText: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to lif. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
            mobileImg: '../../assets/images/mobile-image-hero-1.jpg',            
            desktopImg: '../../assets/images/desktop-image-hero-1.jpg',
        },

        slide2: {
            heading: 'hello world',
            mobileImg: '../../assets/images/mobile-image-hero-2.jpg',
            desktopImg: '../../assets/images/desktop-image-hero-2.jpg',
            paragraphText: 'we are here'
        },

        slide3: {
            heading: 'contact',
            mobileImg: '../../assets/images/mobile-image-hero-3.jpg',
            desktopImg: '../../assets/images/desktop-image-hero-3.jpg',
            paragraphText: 'contact text'
        },

    }

    return Object.assign({}, homeText)
}


export { useSideText }