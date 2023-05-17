const useSideText = () => {
    const homeText = {
        slide1: {
            heading: 'Discover innovative ways to decorate',
            paragraphText: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to lif. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
            mobileImg: '../../assets/images/mobile-image-hero-1.jpg',            
            desktopImg: '../../assets/images/desktop-image-hero-1.jpg',
        },

        slide2: {
            heading: 'We are available all across the globe',
            mobileImg: '../../assets/images/mobile-image-hero-2.jpg',
            desktopImg: '../../assets/images/desktop-image-hero-2.jpg',
            paragraphText: "With stores all over the world, it's easy for you to find durniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        },

        slide3: {
            heading: 'Manufactured with the best materials',
            mobileImg: '../../assets/images/mobile-image-hero-3.jpg',
            desktopImg: '../../assets/images/desktop-image-hero-3.jpg',
            paragraphText: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible, With three decaded of experience in this industry, we understand what customers want for their home and office'
        },

    }

    return Object.assign({}, homeText)
}


export { useSideText }