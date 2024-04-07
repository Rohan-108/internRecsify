/* eslint-disable react/prop-types */
import {
  Bleed,
  BlockStack,
  Box,
  Button,
  Card,
  Icon,
  Text,
} from "@shopify/polaris";
import { CheckIcon } from "@shopify/polaris-icons";
import parse from "html-react-parser";
import Style from "./card.module.scss";
const PriceCard = ({ text, price, line, data }) => {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="200">
        <BlockStack gap="300">
          <Text
            variant="headingMd"
            as="h2"
            fontWeight="bold"
            alignment="center"
          >
            {text}
          </Text>
          <Text
            variant="heading2xl"
            as="h1"
            fontWeight="bold"
            alignment="center"
          >
            {price}
            <Text variant="headingMd" as="span" fontWeight="bold">
              /month
            </Text>
          </Text>
          <Text variant="bodyMd" as="p" tone="subdued" alignment="center">
            {line}
          </Text>
          <Button variant="primary">Choose {text}</Button>
        </BlockStack>
        <Bleed marginInline="400">
          <Box background="bg-surface-secondary" paddingBlock="300">
            <BlockStack gap="200">
              <Text
                as="h3"
                variant="headingSm"
                fontWeight="medium"
                alignment="center"
              >
                Free 7 days Trial
              </Text>
            </BlockStack>
          </Box>
        </Bleed>
        <BlockStack gap="200">
          <Text as="h3" variant="headingSm" fontWeight="medium">
            Features
          </Text>
          <BlockStack gap="100">
            {data.map((e, index) => (
              <div className={Style.listItem} key={index}>
                <Icon source={CheckIcon} tone="success" />
                <p> {parse(e.feature)}</p>
              </div>
            ))}
          </BlockStack>
        </BlockStack>
      </BlockStack>
    </Card>
  );
};

export default PriceCard;
