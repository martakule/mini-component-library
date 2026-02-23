import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ id, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect id={id} value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        <Value>{displayedValue}</Value>
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={2} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const NativeSelect = styled.select`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
`;

const PresentationalBit = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  font-size: 16px;
  line-height: 100%;
  position: relative;
  pointer-events: none;
  z-index: 1;
  color: ${COLORS.gray700};

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 2px solid #4374cb;
  }
`;

const Value = styled.div`
  white-space: nowrap;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

export default Select;
