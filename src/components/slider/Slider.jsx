import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, styled, Typography } from '@mui/material';
import slide1 from '../../assets/hero/slide1.jpg';
import slide2 from '../../assets/hero/slide2.jpg';
import slide3 from '../../assets/hero/slide3.jpg';
import slide4 from '../../assets/hero/slide4.jpg';
import slide5 from '../../assets/hero/slide5.jpg';
import slide6 from '../../assets/hero/slide6.jpg';
import slide7 from '../../assets/hero/slide7.jpg';
import slide8 from '../../assets/hero/slide8.jpg';

// Import Swiper styles
import 'swiper/css';
import './slider.scss';

// import required modules
import { Autoplay } from 'swiper';

export default function Slider() {
  const StyledCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      height: 400,
    },
    [theme.breakpoints.down('md')]: {
      height: 300,
    },
    '&:hover': {
      opacity: 0.8,
      boxSizing: 'borderBox',
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));

  const StyledTypography = styled(Typography)({
    textAlign: 'center',
    color: 'white',
    lineHeight: '50px',
    fontFamily: 'Lora',
    fontWeight: 600,
    background: 'rgba(207, 25, 25, 0.6);',
    fontSize: 30,
  });

  const StyledWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      paddingTop: '20%',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '15%',
    },

    width: '80%',
  }));
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide1})` }}>
            <StyledWrapper>
              <StyledTypography>
                Як користуватися мультіваркою і при цьому економити гроші
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide2})` }}>
            <StyledWrapper>
              <StyledTypography>
                TOP-10 корисних овочевих супів
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide3})` }}>
            <StyledWrapper>
              <StyledTypography>
                Що буде, якщо їсти рибу п'ять разів на тиждень
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide4})` }}>
            <StyledWrapper>
              <StyledTypography>
                Бути здоровим легко з Джеймі Олівером
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide5})` }}>
            <StyledWrapper>
              <StyledTypography>
                Розумні способи використання залишків
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide6})` }}>
            <StyledWrapper>
              <StyledTypography>
                Алкогеографія: як борються з похміллям у різних країнах світу
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide7})` }}>
            <StyledWrapper>
              <StyledTypography>
                Краса по-американськи. Вчимося робити класичне барбекю
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide>
          <StyledCard sx={{ backgroundImage: `url(${slide8})` }}>
            <StyledWrapper>
              <StyledTypography>
                Поради батькам. Як зробити їжу привабливою для дітей
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
