import gsap from 'gsap'
import React from 'react'
import { photos, videos } from '../../data'

function VideoElement({ src }) {
    return (
        <div className="hero-element">
            <video
                className='collage-element'
                autoPlay
                webkit-playsInline=''
                loop
                playsInline=""
                src={src}
            />
        </div>
    )
}
function ImageElement({ src }) {
    return (
        <div className="hero-element">
            <img
                className='collage-element'
                src={src}
                alt=''
            />
        </div>
    )
}

function HeroCollage() {
    const leftImages = photos.slice(0, 2)
    const rightImages = photos.slice(2, photos.length)
    const [leftVideo, rightVideo] = videos



    React.useEffect(() => {
        const tl = gsap.timeline({
            delay: 0.5
        })

        tl.fromTo(
            ".hero-element",
            { y: 300, scale: 0 },
            {
                y: 0, scale: 1, duration: 1, delay: function (i) {
                    return 0.2 * i
                }
            }
        )
    }, [])

    return (
        <div className="hero-collage">
            <div className="left-column">
                {
                    leftImages.map(src => <ImageElement src={src} />)
                }
                <VideoElement src={leftVideo} />
            </div>
            <div className="right-column">
                {
                    rightImages.map(src => <ImageElement src={src} />)
                }
                <VideoElement src={rightVideo} />
            </div>
        </div>
    )
}

export default HeroCollage