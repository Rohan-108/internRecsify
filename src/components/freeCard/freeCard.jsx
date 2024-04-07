import {
  Bleed,
  BlockStack,
  Box,
  Button,
  Card,
  Icon,
  InlineStack,
  Text,
} from "@shopify/polaris";
import Style from "../priceCard/card.module.scss";
import { CheckIcon } from "@shopify/polaris-icons";
const FreeCard = () => {
  return (
    <Card roundedAbove="sm">
      <InlineStack wrap={true} gap="400">
        <div className={Style.freeContainer}>
          <Text
            variant="headingMd"
            as="h2"
            fontWeight="bold"
            alignment="center"
          >
            Free
          </Text>
          <Text
            variant="heading2xl"
            as="h1"
            fontWeight="bold"
            alignment="center"
          >
            $0.00
            <Text variant="headingMd" as="span" fontWeight="bold">
              /month
            </Text>
          </Text>
          <Text variant="bodyMd" as="p" tone="subdued" alignment="center">
            Just start building
          </Text>
          <Button variant="secondary">Choose Plan</Button>
          <Bleed marginInline="400">
            <Box background="bg-surface-secondary" paddingBlock="300">
              <BlockStack gap="200">
                <Text
                  as="h3"
                  variant="headingSm"
                  fontWeight="medium"
                  alignment="center"
                >
                  Free forever
                </Text>
              </BlockStack>
            </Box>
          </Bleed>
        </div>
        <div className={Style.listBlock}>
          <Text as="h3" variant="headingSm" fontWeight="medium">
            Available features:
          </Text>
          <div className={Style.lists}>
            <BlockStack gap="100">
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>
                  Create <strong>1</strong> Gallery
                </p>
              </div>
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>
                  <strong>6</strong> Skin Style with editing (Beta)
                </p>
              </div>
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>
                  <strong>Lifetime</strong> Free
                </p>
              </div>
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>Shop the Look</p>
              </div>
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>
                  <strong>Standard</strong> templates
                </p>
              </div>
            </BlockStack>
            <BlockStack gap="100">
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>
                  <strong>50</strong> Photos Each Gallery
                </p>
              </div>
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>
                  Source: <strong>Images</strong>
                </p>
              </div>
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>
                  <strong>Multiple</strong> layout
                </p>
              </div>
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>
                  <strong>Email & Live Chat</strong> Support
                </p>
              </div>
              <div className={Style.listItem}>
                <Icon source={CheckIcon} tone="success" />
                <p>
                  <strong>No</strong> brandmark
                </p>
              </div>
            </BlockStack>
          </div>
        </div>
      </InlineStack>
    </Card>
  );
};

export default FreeCard;
