import { LinearGradient } from '@vx/gradient';

export default ({ width, height }) => (
  <svg width={width} height={height}>
    <rect x={0} y={0} width={width} height={height} fill="#DE5157" rx={14} />
    <LinearGradient id={'gradient'} from="#ffffff" to="rgba(255,255,255,0.2)" />
  </svg>
);
