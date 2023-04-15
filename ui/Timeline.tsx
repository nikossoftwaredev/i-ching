import Card from 'ui/Card';
import TextToHtml from 'ui/TextToHtml';

type TimeInfo = { date: string; title: string };

interface TimelineProps {
  timeInfo: TimeInfo[];
}

// first and last child can be done through css
const Timeline = ({ timeInfo }: TimelineProps) => {
  return (
    <ul className='relative sm:w-full xl:w-3/4'>
      {timeInfo.map(({ date, title }, idx) => (
        <li key={idx} className='grid grid-flow-row grid-cols-7 items-center justify-start gap-10'>
          <div className='relative h-full  col-span-2 flex items-center justify-end border-r-4 border-bgPrimary pr-5'>
            <h1 className='hidden lg:block break-words mr-2 font-semibold'>{date}</h1>
            <span className=' absolute w-8 h-8 border-bgPrimary rounded-full bg-bgPrimary  -right-[17px] flex items-center justify-center  text-white text-sm'>
              {idx + 1}
            </span>
            {idx === 0 && (
              <span className='absolute w-8 h-[calc(50%_-_1rem)] top-0 bg-white  -right-[17px]'></span>
            )}
            {idx + 1 === timeInfo.length && (
              <span className='absolute w-8 h-[calc(50%_-_1rem)] bottom-0 bg-white  -right-[17px]'></span>
            )}
          </div>
          <div className='flex justify-start col-span-5 my-4'>
            <Card className='p-3'>
              <h1 className='lg:hidden font-semibold'>{date}</h1>
              <h3 className='ml-4 text-lg font-semibold text-gray-900'>
                {<TextToHtml text={title} />}
              </h3>
            </Card>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
