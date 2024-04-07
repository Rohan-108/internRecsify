import {
  ButtonGroup,
  Button,
  Text,
  Bleed,
  Box,
  BlockStack,
  Link,
  Icon,
} from "@shopify/polaris";
import { Free, Growth, Enterprise } from "./data";
import { useCallback, useState } from "react";
import style from "./pricing.module.scss";
import PriceCard from "../components/priceCard/Card";
import FreeCard from "../components/freeCard/freeCard";
import Faq from "../components/faq/faq";
import Comment from "../components/comment/comment";
import { QuestionCircleIcon } from "@shopify/polaris-icons";
const Pricing = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const handleClick = useCallback(
    (index) => {
      if (activeButtonIndex === index) return;
      setActiveButtonIndex(index);
    },
    [activeButtonIndex]
  );
  return (
    <div className={style.home}>
      <div className={style.hometext}>
        <div className={style.heading}>
          <Text variant="heading2xl" as="h1" fontWeight="bold">
            Pricing plans
          </Text>
          <Icon source={QuestionCircleIcon} />
        </div>
        <Text variant="headingSm" as="h6" tone="subdued">
          Flexible and scalable plans. Update at any time.
        </Text>
      </div>
      <div className="buttongroup">
        <ButtonGroup variant="segmented">
          <Button
            variant={activeButtonIndex === 0 ? "primary" : "default"}
            pressed={activeButtonIndex === 0}
            onClick={() => handleClick(0)}
          >
            Pay Monthly
          </Button>
          <Button
            variant={activeButtonIndex === 1 ? "primary" : "default"}
            pressed={activeButtonIndex === 1}
            onClick={() => handleClick(1)}
          >
            Pay Yearly
            <span className={style.spantext}>(Save 25%)</span>
          </Button>
        </ButtonGroup>
      </div>
      <div className={style.cardGroup}>
        <div className={style.price}>
          <PriceCard
            activeButtonIndex={activeButtonIndex}
            text="Starter"
            price={activeButtonIndex === 0 ? "5.99" : "4.49"}
            line="All the basics needed to build"
            data={Free}
          />
          <div className={style.surround}>
            <PriceCard
              activeButtonIndex={activeButtonIndex}
              text="Growth"
              price={activeButtonIndex === 0 ? "12.99" : "9.74"}
              line="Features to grow and optimize"
              data={Growth}
            />
            <p className={style.hoverText}>Recommended</p>
          </div>
          <PriceCard
            activeButtonIndex={activeButtonIndex}
            text="Enterprise"
            price={activeButtonIndex === 0 ? "34.99" : "26.24"}
            line="More scale,control, & support"
            data={Enterprise}
          />
        </div>
        <div>
          <FreeCard />
        </div>
      </div>
      {/* comment section */}
      <div className={style.commentContainer}>
        <div className={style.textContainer}>
          <Text
            as="h1"
            variant="headingLg"
            fontWeight="medium"
            alignment="center"
          >
            See what our customers say
          </Text>
          <Link removeUnderline="false">View More</Link>
        </div>
        <Comment />
      </div>
      {/* faq section */}
      <Bleed>
        <Box background="bg-surface-secondary" paddingBlock="300">
          <BlockStack gap="500">
            <Text
              as="h1"
              variant="headingXl"
              fontWeight="medium"
              alignment="center"
            >
              Frequently asked question
            </Text>
            <Faq />
            <Text variant="headingSm" alignment="center" tone="subdued" as="p">
              see our <Link> Help center</Link>
            </Text>
          </BlockStack>
        </Box>
      </Bleed>
    </div>
  );
};

export default Pricing;
