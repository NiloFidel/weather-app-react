import React, { useEffect } from 'react'
import img1 from '../assets/ayacucho1.jpg'
import '../styles/SliderStyle.css'
import { NavbarComponent } from './NavbarComponent';

export const SliderCompnent = () => {

    useEffect(() => {
        const wrapper = document.querySelector(".wrapper")
        const carousel = document.querySelector(".carousel")
        const arrowBtns = document.querySelectorAll(".wrapper i")
        const firstCardWidth = document.querySelector(".card").offsetWidth;
        const carouselChilderns = [...carousel.children]
        let isDragging = false, startX, startScrollLeft, timeoutId;
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)
        carouselChilderns.slice(-cardPerView).forEach(card => {
            carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
        })
        carouselChilderns.slice(0, cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML('beforeend', card.outerHTML);
        })
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
            })
        })
        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }
        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }
        const dragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }
        const infiniteScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add('no-transition')
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth)
                carousel.classList.remove('no-transition')
            }
            else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add('no-transition')
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove('no-transition')
            }
            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        }
        const autoPlay = () => {
            if (window.innerWidth < 800) return;
            timeoutId = setTimeout(() => {
                carousel.scrollLeft += firstCardWidth
            }, 2500);

        }
        autoPlay()
        carousel.addEventListener("mousedown", dragStart)
        carousel.addEventListener("mousemove", dragging)
        document.addEventListener("mouseup", dragStop)
        carousel.addEventListener("scroll", infiniteScroll)
    }, []);

    return (
        <>
            <NavbarComponent />
            <div className='wrapper'>
                <i id='left' className="fa-solid fa-chevron-left"></i>
                <ul className='carousel'>
                    <li className='card'>
                        <div className='img'><img src={img1} draggable="false" /></div>
                        <h2>this i an </h2>
                        <span>this is price</span>
                    </li>
                    <li className='card'>
                        <div className='img'><img src={img1} draggable="false" /></div>
                        <h2>this i an author</h2>
                        <span>this is price</span>
                    </li>
                    <li className='card'>
                        <div className='img'><img src={img1} draggable="false" /></div>
                        <h2>this i an </h2>
                        <span>this is price</span>
                    </li>
                    <li className='card'>
                        <div className='img'><img src={img1} draggable="false" /></div>
                        <h2>this i an </h2>
                        <span>this is price</span>
                    </li>
                    <li className='card'>
                        <div className='img'><img src={img1} draggable="false" /></div>
                        <h2>this i an </h2>
                        <span>this is price</span>
                    </li>
                    <li className='card'>
                        <div className='img'><img src={img1} draggable="false" /></div>
                        <h2>this i an </h2>
                        <span>this is price</span>
                    </li>
                    <li className='card'>
                        <div className='img'><img src={img1} draggable="false" /></div>
                        <h2>this i an </h2>
                        <span>this is price</span>
                    </li>
                    <li className='card'>
                        <div className='img'><img src={img1} draggable="false" /></div>
                        <h2>this i an </h2>
                        <span>this is price</span>
                    </li>
                </ul>
                <i id='rigth' className="fa-solid fa-chevron-right"></i>

            </div>
        </>
    )
}
