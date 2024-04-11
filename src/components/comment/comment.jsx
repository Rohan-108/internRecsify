/* eslint-disable react/prop-types */
// import { usePrevNextButtons } from "./functions";
// import useEmblaCarousel from "embla-carousel-react";
import style from "./comment.module.scss";
// const OPTIONS = {
//   loop: true,
// };
import { slides } from "./data";
import CommentCard from "./card";
import { NextButton, PrevButton } from "./buttons";
import { useState } from "react";
const len = slides.length - 1;
const Comment = () => {
  //const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [activeIndex, setActiveIndex] = useState(0);
  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  return (
    <section className={style.embla}>
      <div className={style.embla__viewport}>
        <div className={style.embla__container}>
          {/* {slides.map((e, index) => (
            <div className={style.embla__slide} key={index}>
              <div className={style.embla__slide__number}>
                <CommentCard
                  text={e.text}
                  owner={e.name}
                  location={e.location}
                />
              </div>
            </div>
          ))} */}
          {slides && (
            <div className={style.embla__slide}>
              <div className={style.embla__slide__number}>
                <CommentCard
                  text={slides[activeIndex].text}
                  location={slides[activeIndex].location}
                  owner={slides[activeIndex].name}
                />
              </div>
            </div>
          )}
          {slides && (
            <div className={style.embla__slide}>
              <div className={style.embla__slide__number}>
                <CommentCard
                  text={slides[(activeIndex + 1) % len].text}
                  location={slides[(activeIndex + 1) % len].location}
                  owner={slides[(activeIndex + 1) % len].name}
                />
              </div>
            </div>
          )}
          {slides && (
            <div className={style.embla__slide}>
              <div className={style.embla__slide__number}>
                <CommentCard
                  text={slides[(activeIndex + 2) % len].text}
                  location={slides[(activeIndex + 2) % len].location}
                  owner={slides[(activeIndex + 2) % len].name}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={style.embla__controls}>
        <div className={style.embla__buttons}>
          <PrevButton
            onClick={() => {
              setActiveIndex(activeIndex == 0 ? len - 1 : activeIndex - 1);
            }}
          />
          <NextButton
            onClick={() => {
              setActiveIndex(activeIndex == len - 1 ? 0 : activeIndex + 1);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Comment;
