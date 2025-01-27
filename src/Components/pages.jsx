import './pages.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation } from 'swiper/modules';

export function Mdse() {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Убираем обработчик при размонтировании компонента
    return () => {
      if (scrollToTopBtn) {
        scrollToTopBtn.removeEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    };
  }, []);

    return (
    <div>
      <div style={{'width': '29.166%', 'height': '4.629%', 'top': '28.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <h2>ТОВАРИ</h2>
      </div>
      <div className='showcase'>
        <Swiper
          modules={[Navigation]} 
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-button-next'
          }
          }
          loop={false}
          mousewheel={true}
          keyboard={true}>
            <SwiperSlide>
              <div className='image-container'>
                <div className='image-wrapper'>
                  <img src="/image1.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image2.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image3.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image4.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image5.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image6.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='image-container'>
                <div className='image-wrapper'>
                  <img src="/image2.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image3.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image4.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image5.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image6.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
                <div className='image-wrapper'>
                  <img src="/image7.jpg"/>
                  <div className='image-container-div'>
                    <span>
                      НАЗВА НАБОРУ
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="custom-button-next">▶</button>
      </div>
      <div style={{'width': '24,01%', 'height': '1.574%', 'top': '69.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'cursor': 'pointer'}}>дивитися більше категорій +</span>
      </div>
      <div style={{'width': '29.166%', 'height': '4.629%', 'top': '80.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <h2>ТОВАРИ З ОДНОГО НАБОРУ</h2>
      </div>
      <div style={{'width': '38.166%', 'height': '4.9%', 'top': '90.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem massa id imperdiet arcu vulputate. Magna id facilisi diam arcu ipsum. Magna accumsan sed urna non fermentum. Tristique in turpis dolor in pulvinar pellentesque faucibus</span>
      </div>
      <img src='/tovar1.jpg' style={{'width': '30.166%', 'height': '30.9%', 'top': '100.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/tovar2.jpg' style={{'width': '45.166%', 'height': '30.9%', 'top': '100.055%', 'left': '42.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/tovar3.jpg' style={{'width': '45.166%', 'height': '75.95%', 'top': '132.555%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/tovar4.jpg' style={{'width': '30.166%', 'height': '75.95%', 'top': '132.555%', 'left': '57.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <div style={{'width': '29.166%', 'height': '4.629%', 'top': '218.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <h2>НОВИНКИ</h2>
      </div>
      <img src='/novunki1.jpg' style={{'width': '24.5%', 'height': '30.9%', 'top': '226.555%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/novunki2.jpg' style={{'width': '24.5%', 'height': '30.9%', 'top': '226.555%', 'left': '37%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/novunki3.jpg' style={{'width': '24.5%', 'height': '30.9%', 'top': '226.555%', 'left': '63%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <div style={{'width': '24.5%', 'height': '3.1%', 'top': '259.555%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem.</span>
      </div>
      <div style={{'width': '24.5%', 'height': '3.1%', 'top': '259.555%', 'left': '37%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem.</span>
      </div>
      <div style={{'width': '24.5%', 'height': '3.1%', 'top': '259.555%', 'left': '63%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem.</span>
      </div>
      <div style={{'width': '29.166%', 'height': '4.629%', 'top': '272.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <h2>ЗАТИШНІ НАБОРИ</h2>
      </div>
      <img src='/naboru1.jpg' style={{'width': '24.5%', 'height': '30.9%', 'top': '280.555%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/naboru2.jpg' style={{'width': '24.5%', 'height': '30.9%', 'top': '280.555%', 'left': '37%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/naboru3.jpg' style={{'width': '24.5%', 'height': '30.9%', 'top': '280.555%', 'left': '63%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <div style={{'width': '24.5%', 'height': '3.1%', 'top': '313.555%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem.</span>
      </div>
      <div style={{'width': '24.5%', 'height': '3.1%', 'top': '313.555%', 'left': '37%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem.</span>
      </div>
      <div style={{'width': '24.5%', 'height': '3.1%', 'top': '313.555%', 'left': '63%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Gravida convallis id orci egestas non. Rhoncus vitae quis sem.</span>
      </div>
      <div style={{'width': '29.166%', 'height': '4.629%', 'top': '328.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <h2>ТОВАРИ З ОДНОГО НАБОРУ</h2>
      </div>
      <div style={{'width': '50.166%', 'height': '4.9%', 'top': '336.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'opacity': '0px', 'position': 'absolute'}}>
        <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non. Ut pellentesque ultricies quis quis nec ultricies dolor eu sem. Duis tempus aliquam nisi volutpat vitae etiam turpis. At gravida risus eu pellentesque quis. Sed lobortis tincidunt in purus mauris eu consectetur non molestie. Scelerisque id amet quis eget ullamcorper donec non tempus. Malesuada amet nibh tellus nunc convallis elit ultrices. Felis viverra ac nunc felis. Nec ipsum feugiat faucibus eget mauris. Sed molestie facilisi ipsum ullamcorper aliquet. Nibh sed diam eu tincidunt dignissim porttitor vel blandit.</span>
      </div>
      <img src='/tovar5.jpg' style={{'width': '43.566%', 'height': '77.9%', 'top': '350.055%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/tovar6.jpg' style={{'width': '32.166%', 'height': '30.9%', 'top': '350.055%', 'left': '56%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/tovar7.jpg' style={{'width': '43.566%', 'height': '28.95%', 'top': '429.555%', 'left': '11.458%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <img src='/tovar8.jpg' style={{'width': '32.166%', 'height': '75.95%', 'top': '382.555%', 'left': '56%', 'padding': '10px 10px 10px 0px', 'gap': '10px', 'position': 'absolute', 'borderRadius': '15px'}}/>
      <div style={{'width': '77.083%', 'height': '30.9%', 'position': 'absolute', 'display': 'flex', 'top': '477.555%', 'left': '11.458%', 'justifycontent': 'space-around'}}>
        <div className='image-container'>
          <div style={{'width': '19.27%', 'textAlign': 'center'}}>
            <img src='/mini1.png' style={{'width': '13%', 'height': '10%', 'borderRadius': '0px'}}/>
            <p style={{'margin': '1%'}}></p>
            <span style={{'fontWeight': '600', 'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.9vw'}}>Доставка</span>
            <p style={{'margin': '1%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non.</span>
          </div>
          <div style={{'width': '19.27%', 'textAlign': 'center'}}>
            <img src='/mini2.png' style={{'width': '13%', 'height': '10%', 'borderRadius': '0px'}}/>
            <p style={{'margin': '1%'}}></p>
            <span style={{'fontWeight': '600', 'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.9vw'}}>Оплата</span>
            <p style={{'margin': '1%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non.</span>
          </div>
          <div style={{'width': '19.27%', 'textAlign': 'center'}}>
            <img src='/mini3.png' style={{'width': '13%', 'height': '10%', 'borderRadius': '0px'}}/>
            <p style={{'margin': '1%'}}></p>
            <span style={{'fontWeight': '600', 'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.9vw'}}>Організація</span>
            <p style={{'margin': '1%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non.</span>
          </div>
          <div style={{'width': '19.27%', 'textAlign': 'center'}}>
            <img src='/mini4.png' style={{'width': '13%', 'height': '10%', 'borderRadius': '0px'}}/>
            <p style={{'margin': '1%'}}></p>
            <span style={{'fontWeight': '600', 'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.9vw'}}>Планування</span>
            <p style={{'margin': '1%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>Lorem ipsum dolor sit amet consectetur. Egestas viverra tempus molestie non.</span>
          </div>
        </div>
      </div>
      <div style={{'width': '55.083%', 'position': 'absolute', 'top': '510.555%', 'left': '11.458%'}}>
        <h2 style={{'fontWeight': '600', 'fontFamily': 'Montserrat, sans-serif'}}>НАЗВА РОЗДІЛУ</h2>
        <p style={{'margin': '3%'}}></p>
          <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
            Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.
          </span>
      </div>
      <div style={{'width': '55.083%', 'position': 'absolute', 'top': '545.555%', 'left': '11.458%'}}>
        <h2 style={{'fontWeight': '600', 'fontFamily': 'Montserrat, sans-serif'}}>НАЗВА РОЗДІЛУ</h2>
        <p style={{'margin': '3%'}}></p>
          <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
            Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.
          </span>
      </div>
      <div style={{'width': '55.083%', 'position': 'absolute', 'top': '585.555%', 'left': '11.458%'}}>
        <h2 style={{'fontWeight': '600', 'fontFamily': 'Montserrat, sans-serif'}}>НАЗВА РОЗДІЛУ</h2>
        <p style={{'margin': '3%'}}></p>
          <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
            Lorem ipsum dolor sit amet consectetur. Habitasse consequat egestas lectus blandit consequat. A sed placerat sapien amet scelerisque ullamcorper amet. Elementum consequat risus nullam augue lorem turpis rutrum enim. Sagittis magnis adipiscing non pulvinar ut lacus et montes molestie. Purus vitae risus laoreet vel quis volutpat facilisi justo sed. 
            Sit morbi cras vel non et ut. Ut cursus justo leo nulla ridiculus pharetra egestas libero sed. Pellentesque odio feugiat volutpat amet 
            sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in
            enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. 
            Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis. sed id scelerisque. Ipsum cras vivamus sit ultrices pulvinar. Aliquam donec leo aliquam ornare in enim proin proin eget. Pellentesque tempus eget viverra volutpat nunc hac. Elementum ut ridiculus et eget eu viverra et. 
            Lorem lorem habitant pulvinar sapien cras. Phasellus leo amet purus luctus cursus morbi turpis nibh non. Rhoncus etiam feugiat dolor ac cursus in ac semper. Et urna magna aliquam in sagittis. Eget ultrices ipsum rutrum lacus eu scelerisque sit. Et nibh eget morbi felis fringilla quis habitant. Ipsum aenean integer amet morbi tincidunt. Posuere cras commodo lobortis sit risus dictum nibh. Commodo risus dolor turpis suspendisse convallis.
          </span>
      </div>
      <div style={{'width': '77.083%', 'position': 'absolute', 'top': '645.555%', 'left': '11.458%'}}>
        <div style={{'textAlign': 'left', 'display': 'flex', 'justifyContent': 'space-between'}}>
          <div>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'fontWeight': '600'}}>Заголовок підрозділу</span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
          </div>
          <div>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'fontWeight': '600'}}>Заголовок підрозділу</span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
          </div>
          <div>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'fontWeight': '600'}}>Заголовок підрозділу</span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
          </div>
          <div>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'fontWeight': '600'}}>Заголовок підрозділу</span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
            <p style={{'margin': '11%'}}></p>
            <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)'}}>
              Зміст підтеми
            </span>
          </div>
        </div>
      </div>
      <img src='/inst.png' style={{'top': '695.555%', 'position': 'absolute', 'left': '11.458%', 'width': '1.15%', 'height': '2.3%', 'cursor': 'pointer'}}/>
      <img src='/twitter.png' style={{'top': '695.555%', 'position': 'absolute', 'left': '13.658%', 'width': '1.15%', 'height': '2.3%', 'cursor': 'pointer'}}/>
      <img src='/telega.png' style={{'top': '695.555%', 'position': 'absolute', 'left': '15.858%', 'width': '1.15%', 'height': '2.3%', 'cursor': 'pointer'}}/>
      <img src='/visa.png' style={{'top': '695.855%', 'position': 'absolute', 'left': '21.858%', 'width': '1.6%', 'height': '1.5%'}}/>
      <img src='/mastercard.png' style={{'top': '695.855%', 'position': 'absolute', 'left': '25.858%', 'width': '1.4%', 'height': '1.65%'}}/>
      <img src='/maestro.png' style={{'top': '695.855%', 'position': 'absolute', 'left': '29.858%', 'width': '1.4%', 'height': '1.65%'}}/>
      <img src='/paypal.png' style={{'top': '695.855%', 'position': 'absolute', 'left': '33.858%', 'width': '1%', 'height': '1.65%'}}/>
      <img src='/applepay.png' style={{'top': '695.555%', 'position': 'absolute', 'left': '37.858%', 'width': '1.4%', 'height': '2.2%'}}/>
      <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'position': 'absolute', 'top': '710.855%', 'left': '11.458%', 'padding': '0px 0px 4% 0px'}}>
        Заголовок підрозділу
      </span>
      <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'position': 'absolute', 'top': '710.855%', 'left': '49.458%'}}>
        Заголовок підрозділу
      </span>
      <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'position': 'absolute', 'top': '710.855%', 'left': '59.458%'}}>
        Заголовок підрозділу
      </span>
      <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'position': 'absolute', 'top': '710.855%', 'left': '69.458%'}}>
        Заголовок підрозділу
      </span>
      <span style={{'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'color': 'rgba(0, 0, 0, 1)', 'position': 'absolute', 'top': '710.855%', 'left': '79.458%'}}>
        Заголовок підрозділу
      </span>
      <button class="scroll-to-top" id="scrollToTopBtn">↑</button>
    </div>
  );
}

export function Rooms() {
    return <h2>Комнаты</h2>;
}

export function Design() {
    return <h2>Дизайн</h2>;
}

export function NotFound() {
    return <h2>Ресурс не найден 404</h2>;
}