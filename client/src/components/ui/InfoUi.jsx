import React from 'react';
import {
  ItemMeta,
  ItemImage,
  ItemHeader,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Image,
  Item,
  ItemGroup,
} from 'semantic-ui-react';

export default function InfoUi() {
  return (
    <ItemGroup>
      <Item>
        <ItemImage
          size="tiny"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <ItemContent>
          <ItemHeader as="a">Header</ItemHeader>
          <ItemMeta>Description</ItemMeta>
          <ItemDescription>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </ItemDescription>
          <ItemExtra>Additional Details</ItemExtra>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
}
