import { CircularProgressbarWithChildren as ProgressBar } from 'react-circular-progressbar';

interface Props {
  title: string;
  value: number;
}

export function SkillPercentage({ title, value }: Props) {
  return (
    <div className="flex flex-col items-center mb-4">
      <ProgressBar
        value={value / 100}
        maxValue={1}
        strokeWidth={9}
        styles={{
          root: {
            height: '160px',
          },
          path: {
            stroke: 'rgba(170, 0, 255, 100)',
            strokeLinecap: 'round',
            transform: 'rotate(0.50turn)',
            transformOrigin: 'center center',
          },
        }}
      >
        <div className="flex justify-center items-center">
          <strong className="text-white text-3xl">{value}%</strong>
        </div>
      </ProgressBar>

      <h5 className="text-white text-2xl font-centraMedium mt-6 mb-2">
        {title}
      </h5>
    </div>
  );
}
