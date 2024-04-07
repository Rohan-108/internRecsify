/* eslint-disable react/prop-types */
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRef } from "react";
import { Text } from "@shopify/polaris";
import style from "./faq.module.scss";
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className={style.wrapper}>
      <button
        className={`${style.questionContainer} ${
          isOpen ? `${style.active}` : ""
        }`}
        onClick={onClick}
      >
        <Text variant="headingMd" as="h2" fontWeight="semi-bold">
          {question}
        </Text>
        <RiArrowDropDownLine
          className={`${style.arrow} ${isOpen ? `${style.active}` : ""}`}
        />
      </button>

      <div
        ref={contentHeight}
        className={style.answerContainer}
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <Text variant="headingMd" as="h2" fontWeight="semi-bold">
          {answer}
        </Text>
      </div>
    </div>
  );
};
export default FaqItem;
