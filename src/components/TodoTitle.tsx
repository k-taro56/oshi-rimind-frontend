import React, { memo } from "react";
import { Heading } from "@chakra-ui/react";

interface TodoTitleProps {
  title: string;
  as?: React.ElementType; // Chakra UIコンポーネントの型を指定する
  fontsize?: string | Record<string, string>;
  mt?: string;
}

const TodoTitleComponent = ({ title, as, fontsize, mt }: TodoTitleProps) => {
  return (
    <Heading mt={mt} as={as} fontSize={fontsize} w="full">
      {title}
    </Heading>
  );
};

TodoTitleComponent.displayName = "TodoTitle";

export const TodoTitle = memo(TodoTitleComponent);
