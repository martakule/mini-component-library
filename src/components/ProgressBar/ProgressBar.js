import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

let labelIdCounter = 0;

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    trackRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    trackRadius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    trackRadius: 8,
  },
};

const FILL_RADIUS = 4;

const ProgressBar = ({ value, size = "medium" }) => {
  const styles = SIZES[size] ?? SIZES.medium;
  const isComplete = value >= 99.5;

  const labelId = React.useMemo(() => {
    labelIdCounter += 1;
    return `progressbar-label-${labelIdCounter}`;
  }, []);

  return (
    <Track
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-valuetext={`${value}%`}
      aria-labelledby={labelId}
      style={{
        "--height": `${styles.height}px`,
        "--padding": `${styles.padding}px`,
        "--track-radius": `${styles.trackRadius}px`,
        "--width": `${value}%`,
        "--progress-radius": isComplete
          ? `${FILL_RADIUS}px`
          : `${FILL_RADIUS}px 0px 0px ${FILL_RADIUS}px`,
      }}
    >
      <VisuallyHidden id={labelId}>{value}%</VisuallyHidden>
      <FillWrapper>
        <Fill />
      </FillWrapper>
    </Track>
  );
};

const Track = styled.div`
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  box-sizing: border-box;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px 0px ${COLORS.transparentGray35};
  border-radius: var(--track-radius);
`;

const FillWrapper = styled.div`
  width: var(--width);
  height: 100%;
  overflow: hidden;
  border-radius: var(--progress-radius);
`;

const Fill = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.primary};
`;

export default ProgressBar;
