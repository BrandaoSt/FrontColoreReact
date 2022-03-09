import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import avatar4 from '../Avatares/avatar4.png'
import avatar1 from '../Avatares/avatar1.png'
import avatar2 from '../Avatares/avatar2.png'
import avatar3 from '../Avatares/avatar3.png'

const CarouselAvaliacoes = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar4} alt='megan' />
                <div className='meucarousel'>
                    <h3>Megan</h3>
                    <p>Mostra um interesse verdadeiro nos usuários e em encontrar soluções para seus problemas.</p>
                </div>
            </>
            <>
                <img src={avatar1} alt='Ana' />
                <div className='meucarousel'>
                    <h3>Ana</h3>
                    <p> Mostra um interesse verdadeiro nos usuários e em encontrar soluções para seus problemas.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt='pedro' />
                <div className='meucarousel'>
                    <h3>Pedro</h3>
                    <p>Mostra um interesse verdadeiro nos usuários e em encontrar soluções para seus problemas.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt='Joaquim' />
                <div className='meucarousel'>
                    <h3>Joaquim</h3>
                    <p>Mostra um interesse verdadeiro nos usuários e em encontrar soluções para seus problemas.</p>
                </div>
            </>
        </Carousel>
    )
}


export default CarouselAvaliacoes
