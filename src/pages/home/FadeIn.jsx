import image from '../../assets/carousel-second/image1.png'
import image2 from '../../assets/carousel-second/image2.png'
import image3 from '../../assets/carousel-second/image3.png'
import image1 from '../../assets/carousel-second/image1.png'
import { memo, useEffect, useRef, useState } from 'react'

function FadeIn() { 
    const imageRef3 = useRef()
    const imageRef2 = useRef()
    const imageRef1 = useRef()

    const images = [imageRef1, imageRef2, imageRef3]

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
             images.forEach(item=>{
                item.current.classList.add('opacity-0')
            })
            images[counter].current.classList.remove('opacity-0')
            if (counter === 2) {
                setCounter(0)
            } else {
                setCounter((prevCounter) => prevCounter + 1)
            }
        }, 5000)
    
        return () => {
            clearInterval(interval)
        };
    }, [counter])

    return (
        <div className="absolute -bottom-[56.75px] right-28 w-[826px] h-[835px] max-w-[100%] bg-black/[0.04]">
            <img src={image3} ref={imageRef3} alt="" className='carouselSlider absolute bottom-0 transition-all duration-1000 opacity-0'/>
            <img src={image2} ref={imageRef2} alt="" className='carouselSlider absolute bottom-0 transition-all duration-1000 opacity-0'/>
            <img src={image1} ref={imageRef1} alt="" className='carouselSlider absolute bottom-0 transition-all duration-1000 '/>
        </div>
    )
}

export default FadeIn