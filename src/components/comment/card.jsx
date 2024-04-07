/* eslint-disable react/prop-types */
import { BlockStack, Card, Icon, Text } from "@shopify/polaris";
import { StarFilledIcon } from "@shopify/polaris-icons";
import style from "./comment.module.scss";
const CommentCard = ({ text, owner, location }) => {
  return (
    <Card roundedAbove="sm">
      <BlockStack marginInline="200" gap="200">
        <div className={style.stars}>
          <Icon source={StarFilledIcon} tone="base" />
          <Icon source={StarFilledIcon} tone="base" />
          <Icon source={StarFilledIcon} tone="base" />
          <Icon source={StarFilledIcon} tone="base" />
          <Icon source={StarFilledIcon} tone="base" />
        </div>
        <Text variant="bodyMd" as="p">
          {text}
        </Text>
        <Text variant="headingMd" as="p" fontWeight="semi-bold">
          {owner}
        </Text>
        <Text variant="bodyMd" as="p">
          {location}
        </Text>
      </BlockStack>
    </Card>
  );
};

export default CommentCard;
