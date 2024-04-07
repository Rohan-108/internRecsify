/* eslint-disable react/prop-types */
import { usePrevNextButtons } from "./functions";
import useEmblaCarousel from "embla-carousel-react";
import style from "./comment.module.scss";
const OPTIONS = { align: "start", dragFree: true, slidesToScroll: "auto" };
import { slides } from "./data";
import CommentCard from "./card";
import { NextButton, PrevButton } from "./buttons";
const Comment = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={style.embla}>
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={style.embla__container}>
          {slides.map((e, index) => (
            <div className={style.embla__slide} key={index}>
              <div className={style.embla__slide__number}>
                <CommentCard
                  text={e.text}
                  owner={e.name}
                  location={e.location}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.embla__controls}>
        <div className={style.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Comment;
