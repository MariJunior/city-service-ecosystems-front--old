import { FC, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { ApplicationSliderCard } from './components/application-slider-card';
import { ApplicationSliderHeader } from './components/application-slider-header';
import { ApplicationTablet } from './components/application-tablet';

import arrow from '../../assets/application-slider/arrow_right.svg';

export interface TabProps {
  label: string;
  value: string;
  action: () => void;
}

export interface ApplicationCardProps {
  title: string;
  subtitle: string;
  mark?: string;
  icon: string;
  type?: string;
}

export interface AppHeaderSliderProps {
  tabs: TabProps[];
  tabsTitle: string;
  defaults: { label: string; value: string; action: () => void };
}

export interface ApplicationSliderProps {
  slides: ApplicationCardProps[];
}

export const ApplicationsSlider: FC<ApplicationSliderProps> = ({ slides }) => {
  const [currentTab, setCurrentTab] = useState<typeof slides>([]);

  const newCards =
    slides &&
    slides.filter((item) => {
      return item.mark === 'new';
    });

  const choosedCards =
    slides && slides.filter((item) => item.mark === 'favorite');

  const popularCards =
    slides && slides.filter((item) => item.mark === 'popular');

  const getAllCards = () => {
    setCurrentTab(slides);
  };

  useEffect(() => {
    setCurrentTab(slides);
  }, []);

  const getNew = () => {
    setCurrentTab(newCards);
  };

  const getFavorites = () => {
    setCurrentTab(choosedCards);
  };

  const getPopular = () => {
    setCurrentTab(popularCards);
  };

  const applicationSlidesRender = () => {
    return currentTab?.map((slide, index: number) => (
      <SwiperSlide key={index}>
        <ApplicationSliderCard
          title={slide.title}
          icon={slide.icon}
          mark={slide.mark}
          subtitle={slide.subtitle}
        />
        {slide.type === 'bottom' && (
          <ApplicationSliderCard
            title={slide?.title}
            icon={slide?.icon}
            subtitle={slide?.subtitle}
            mark={slide?.mark}
          />
        )}
      </SwiperSlide>
    ));
  };

  const applicationsTabletRender = () => {
    return (
      <ApplicationTablet>
        {currentTab?.slice(0, 6).map((slide, index: number) => (
          <ApplicationSliderCard
            key={index}
            title={slide.title}
            icon={slide.icon}
            mark={slide.mark}
            subtitle={slide.subtitle}
          />
        ))}
      </ApplicationTablet>
    );
  };

  const ApplicationSliderTabs = [
    {
      label: 'Популярные',
      value: 'popular',
      action: () => getPopular(),
    },
    {
      label: 'Выбор редакции',
      value: 'choosed',
      action: () => getFavorites(),
    },
    {
      label: 'Новинки',
      value: 'news',
      action: () => getNew(),
    },
    {
      label: 'Все',
      value: 'all',
      action: () => getAllCards(),
    },
  ];

  const filtersDefaults = {
    label: 'все',
    value: 'all',
    action: () => getAllCards(),
  };

  return (
    <>
      <Desktop>
        <Section>
          <ApplicationSliderHeader
            defaults={filtersDefaults}
            tabs={ApplicationSliderTabs}
            tabsTitle='Приложения'
          />
          <StyledSwiper>
            <Swiper
              slidesPerView={5}
              loop={true}
              navigation={true}
              breakpoints={{
                1024: {
                  width: 1880,
                },
              }}
            >
              <div className='swiper_opacity_left'></div>
              <div className='swiper_opacity_right'></div>
              {applicationSlidesRender()}
            </Swiper>
          </StyledSwiper>
        </Section>
      </Desktop>
      <Mobile>
        <ApplicationSliderHeader
          defaults={filtersDefaults}
          tabs={ApplicationSliderTabs}
          tabsTitle='Приложения'
        />
        {applicationsTabletRender()}
      </Mobile>
    </>
  );
};

const Section = styled.section``;

const Desktop = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Mobile = styled.div`
  display: none;

  @media (max-width: 1023px) {
    display: block;
  }
`;

const StyledSwiper = styled.div`
  .swiper-wrapper {
    padding-top: 58px;
    padding-bottom: 10px;
    height: 410px;
  }

  .swiper-button-next,
  swiper-button-prev {
    width: 25px;
    height: 44px;
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
  }

  .swiper-button-next {
    background-image: url(${arrow});
    right: 55px;
  }
  .swiper-button-next::after {
    display: none;
  }

  .swiper-button-prev {
    background-image: url(${arrow});
    background-repeat: no-repeat;
    transform: rotate(180deg);
    left: 55px;
  }
  .swiper-button-prev::after {
    display: none;
  }

  .swiper-slide {
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
  }

  .swiper_opacity_left {
    position: absolute;
    left: -50px;
    top: 50px;
    width: 528px;
    height: 506px;
    background: linear-gradient(
      180deg,
      #fffbfb 22.4%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(-90deg);
    z-index: 5;
  }

  .swiper_opacity_right {
    position: absolute;
    right: -11px;
    top: 50px;
    width: 528px;
    height: 506px;
    background: linear-gradient(
      180deg,
      #fffbfb 22.4%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(90deg);
    z-index: 5;
  }
`;
