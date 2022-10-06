import { FC, useState, useEffect } from "react";
import styled from "@emotion/styled";

import { SocialRoleProps } from "../../../../types";
import { ALL_ROLES_ID } from "../../../../data";

import {
  getMediaquery,
  getFont,
  fontColors,
} from "../../../../../../../styles";
import { ifProp } from "../../../../../../../lib";

export type SocialRoleStylesProps = {
  isActive: boolean;
  isInitialState?: boolean;
};
export const SocialRole: FC<SocialRoleProps> = ({
  id,
  title,
  icon,
  selectedItems,
  setSelectedItems,
}) => {
  const [isInitialState, setInititalState] = useState<boolean>(true);

  const isActive =
    selectedItems && [...selectedItems].indexOf(id) !== -1 ? true : false;
  const isSelectedItemsNoLength = selectedItems && !selectedItems.length;

  const handleClick = () => {
    const isIdInitial = id === ALL_ROLES_ID;
    setSelectedItems!(null);
    if (isIdInitial) return;
    else if (setSelectedItems) setSelectedItems(id);
  };

  useEffect(() => {
    setInititalState(!!isSelectedItemsNoLength);
  }, [isSelectedItemsNoLength, selectedItems]);

  return (
    <Role
      isInitialState={isInitialState}
      isActive={isActive}
      onClick={handleClick}
    >
      {icon}
      <Title isActive={isActive}>{title}</Title>
    </Role>
  );
};

const Role = styled.div<SocialRoleStylesProps>`
  display: flex;
  align-items: center;
  height: 41px;
  border-radius: 100px;
  margin: 0 10px 11px 0;
  cursor: pointer;
  background: ${ifProp(
    "isActive",
    fontColors.cornFlowerBlue,
    fontColors.white
  )};

  border: none;

  :nth-of-type(1) {
    height: 36px;

    background: ${ifProp(
      "isInitialState",
      fontColors.cornFlowerBlue,
      fontColors.white
    )};
    > p {
      color: ${ifProp(
        "isInitialState",
        fontColors.white,
        fontColors.cornFlowerBlue
      )};
    }
  }

  :nth-of-type(4) {
  }
  :nth-last-of-type(1) {
    background: ${fontColors.lightSlateBlue};
    > p {
      color: ${fontColors.white};
    }
  }
  > svg {
    margin-right: 11px;
    max-width: 24px;
    max-height: 23px;
  }
  > svg > path {
    fill: ${ifProp("isActive", fontColors.white, fontColors.cornFlowerBlue)};
  }
  ${getMediaquery("sm")} {
    padding-left: 10px;
    padding-right: 10px;
  }
  ${getMediaquery("md")} {
    padding-left: 10px;
    padding-right: 10px;
    padding-left: 25px;
    padding-right: 30px;
  }
`;

const Title = styled.p<SocialRoleStylesProps>`
  ${getFont("medium")}
  color: ${ifProp("isActive", fontColors.white, fontColors.cornFlowerBlue)};
  margin: 0;
  font-weight: bold;
  ${getMediaquery("sm")} {
    font-size: 12px;
  }
  ${getMediaquery("md")} {
    font-size: 14px;
  }
`;
