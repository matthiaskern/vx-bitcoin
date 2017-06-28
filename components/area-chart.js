import React from 'react';
import { AreaClosed } from '@vx/shape';
import { Group } from '@vx/group';
import { Grid, Rows, Columns } from '@vx/grid';
import { AxisLeft, AxisRight, AxisBottom } from '@vx/axis';
import { curveMonotoneX } from '@vx/curve';
import { LinearGradient } from '@vx/gradient';
import { scaleTime, scaleLinear } from '@vx/scale';
import { extent, max } from 'd3-array';
import { withScreenSize } from '@vx/responsive';

const xVal = d => d.date;
const yVal = v => v.value;

// responsive utils for axis ticks
function numTicksForHeight(height) {
  if (height <= 300) return 3;
  if (300 < height && height <= 600) return 5;
  return 10;
}

function numTicksForWidth(width) {
  if (width <= 300) return 2;
  if (300 < width && width <= 400) return 5;
  return 10;
}

const AreaChart = ({ screenWidth, screenHeight, data, margin }) => {
  const padding = 40;
  const height = screenHeight * 0.75;
  let width = screenWidth - padding;
  if (width > 1000) width = 1000;
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  // scales
  const xScale = scaleTime({
    range: [0, xMax],
    domain: extent(data, xVal)
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, max(data, yVal) + yMax / 3],
    nice: true
  });

  return (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="transparent"
        rx={14}
      />
      <LinearGradient
        id={'gradient'}
        from="#ffffff"
        to="rgba(255,255,255,0.2)"
      />
      <Group top={margin.top} left={margin.left}>
        <AreaClosed
          data={data}
          xScale={xScale}
          yScale={yScale}
          x={xVal}
          y={yVal}
          strokeWidth={1}
          stroke={'url(#gradient)'}
          fill={'url(#gradient)'}
          curve={curveMonotoneX}
        />
      </Group>

      <AxisLeft
        top={margin.top}
        left={margin.left}
        scale={yScale}
        hideZero
        numTicks={numTicksForHeight(height)}
        label={
          <text
            fill="#000"
            textAnchor="middle"
            fontSize={10}
            fontFamily="Arial"
          >
            Dollars $
          </text>
        }
        stroke="#1b1a1e"
        tickLabelComponent={
          <text
            fill="#000"
            textAnchor="end"
            fontSize={10}
            fontFamily="Arial"
            dx="-0.25em"
            dy="0.3em"
          />
        }
      />
      <AxisRight
        top={margin.top}
        left={width - margin.left}
        scale={yScale}
        hideZero
        numTicks={numTicksForHeight(height)}
        label={
          <text
            fill="#000"
            textAnchor="middle"
            fontSize={10}
            fontFamily="Arial"
          >
            Dollars $
          </text>
        }
        stroke="#1b1a1e"
        tickLabelComponent={
          <text
            fill="#000"
            textAnchor="start"
            fontSize={10}
            fontFamily="Arial"
            dx="0.25em"
            dy="0.3em"
          />
        }
      />
      <AxisBottom
        top={height - margin.bottom}
        left={margin.left}
        scale={xScale}
        numTicks={numTicksForWidth(width)}
        label={
          <text
            fill="#000"
            textAnchor="middle"
            fontSize={10}
            fontFamily="Arial"
          />
        }
        stroke={'#1b1a1e'}
        tickStroke={'#1b1a1e'}
        tickLabelComponent={
          <text
            fill="#000"
            textAnchor="middle"
            fontSize={10}
            fontFamily="Arial"
            dy="0.25em"
          />
        }
      />
    </svg>
  );
};

export default withScreenSize(AreaChart);
