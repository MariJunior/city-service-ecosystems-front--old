import { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { ifProp } from '../../lib/if-prop';
import { getMediaquery } from '../../styles/mixins/mediaqueries';
import { OptionProps } from './types';

export interface CardsFiltersProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  options: OptionProps[];
  defaults: OptionProps;
}

export function CardsFilters({
  options,
  defaults,
  ...props
}: CardsFiltersProps) {
  const [selectedOption, setSelectedOption] = useState(defaults);

  const onUnfoldOptionCliked = (
    option: string,
    value: string,
    action: () => void
  ) => () => {
    action();
    setSelectedOption({ label: option, value: value, action: action });
  };

  const renderSelectListItemsUnfold = () => {
    return options.map((option, index) => (
      <SelectListItem
        key={index}
        value={option.value}
        selected={option.value === selectedOption.value}
        onClick={onUnfoldOptionCliked(
          option.label,
          option.value,
          option.action!
        )}
      >
        {option.label}
      </SelectListItem>
    ));
  };

  return (
    <Wrapper {...props}>
      <SelectList>{renderSelectListItemsUnfold()}</SelectList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  width: 135px;
`;

const font = css`
  font-family: var(--font-families-ubuntu);
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-transform: capitalize;
`;

const SelectList = styled.ul`
  list-style: none;
  position: static;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border-radius: 0;
  border: none;
  background-color: transparent;
`;

interface SelectListItemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  value?: string;
  selected?: boolean;
}

const SelectListItem = styled.li<SelectListItemProps>`
  margin: 0;
  padding: 5px 0;
  ${font};
  text-transform: lowercase;
  color: #599cf6;
  cursor: pointer;
  white-space: nowrap;

  &:not(:last-child) {
    margin-right: 30px;
  }

  ${ifProp(
    'selected',
    css`
      padding: 10px 35px;
      background-color: rgba(27, 142, 255, 0.1);
      border-radius: 100px;
    `
  )};

  &:hover {
    color: var(--colors-darkblue);
    opacity: 0.8;
  }
`;
