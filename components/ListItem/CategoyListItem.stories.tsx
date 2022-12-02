import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
// import { MyButton } from "./Button";
import { CategoryListItem } from "./categoryListItem";

const ListItemMeta: ComponentMeta<typeof CategoryListItem> = {
  title: "CategoryListItem",
  component: CategoryListItem,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    title: "Hello world",
    subTitle: "121 deals 1 store"
  },
};

export default ListItemMeta;

type ListItemStory = ComponentStory<typeof CategoryListItem>;

export const Basic: ListItemStory = (args) => <CategoryListItem {...args} />;
