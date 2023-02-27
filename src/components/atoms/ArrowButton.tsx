import clsx from 'clsx';

import ArrowLeft from '../../assets/img/chevron-left.svg';
import ArrowRight from '../../assets/img/chevron-right.svg';

interface Props {
  type?: 'left' | 'right';
  isDisabled?: boolean;
}

export function ArrowButton({ type }: Props) {
  return (
    <button
      className={clsx(
        'h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center absolute top-[34%] hover:bg-gray-600 transition-all duration-200',
        {
          '-left-10': type === 'left',
          '-right-3': type === 'right',
        },
      )}
    >
      {type === 'left' ? (
        <img src={ArrowLeft} alt="Voltar" className="text-white" />
      ) : (
        <img src={ArrowRight} alt="Próximo" className="text-white" />
      )}
    </button>
  );
}
