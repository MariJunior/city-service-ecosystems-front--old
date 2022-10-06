import { FC, useState } from "react";
import styled from "@emotion/styled";

import { SocialRole } from "./components/social-role";

import { SocialRoleProps } from "../../types";

import { getMediaquery } from "../../../../../styles";

export interface SocialRolesProps {
  roles: SocialRoleProps[];
}

export type SelectedItemsType = number[] | null;

export const SocialRoles: FC<SocialRolesProps> = ({ roles }) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItemsType>([]);

  const addOrRemoveItem = (id: number) => {
    const exists = selectedItems && selectedItems.includes(id);
    if (exists) {
      const filteredItems =
        selectedItems && selectedItems.filter((item) => item !== id);

      return filteredItems;
    }

    return [...selectedItems!, id];
  };
  const setSelectedItemsHandler = (id: number | null) => {
    if (id === null) {
      setSelectedItems([]);
    } else {
      setSelectedItems(addOrRemoveItem(id));
    }
  };

  return (
    <Wrapper>
      {roles.map((item, index) => (
        <SocialRole
          key={index}
          id={item.id}
          icon={item.icon && item.icon}
          title={item.title}
          selectedItems={selectedItems}
          setSelectedItems={(id) => setSelectedItemsHandler(id)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 97px;

  ${getMediaquery("sm")} {
    max-width: 100%;
  }

  ${getMediaquery("md")} {
    max-width: 768px;
  }
  ${getMediaquery("lg")} {
    max-width: 910px;
  }
`;
