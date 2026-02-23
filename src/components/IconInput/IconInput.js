import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14 / 16,
    height: 24 / 16,
    iconSize: 16,
    gap: 8 / 16,
    borderThickness: 1,
  },
  large: {
    fontSize: 18 / 16,
    height: 36 / 16,
    iconSize: 24,
    gap: 12 / 16,
    borderThickness: 2,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size = "small",
  placeholder,
}) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      style={{
        "--width": `${width}px`,
        "--font-size": `${styles.fontSize}rem`,
        "--height": `${styles.height}rem`,
        "--icon-size": `${styles.iconSize}px`,
        "--gap": `${styles.gap}rem`,
        "--border-thickness": `${styles.borderThickness}px`,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputWrapper>
        <IconWrapper>
          <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
        </IconWrapper>
        <TextInput placeholder={placeholder} />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: inline-block;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid -webkit-focus-ring-color;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  height: var(--height);
  border-bottom: var(--border-thickness) solid ${COLORS.black};
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: var(--icon-size);
  height: var(--icon-size);
  pointer-events: none;
`;

const TextInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  padding: 0 0 0 calc(var(--icon-size) + var(--gap));
  margin: 0;
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  line-height: var(--height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
