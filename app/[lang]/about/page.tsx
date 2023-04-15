import { ADDRESS, LAST_NAME, NAME } from 'data/general';

const Curriculum = () => {
  return (
    <main className='w-full flex items-center justify-center flex-col'>
      <div className='p-5 mr-auto border-gray-700 border-2 rounded-xl'>
        <h2>
          <strong>Ονομα:</strong> {NAME}
        </h2>
        <h2>
          <strong>Επώνυμο:</strong> {LAST_NAME}
        </h2>
        <h2>
          <strong>Διεύθυνση:</strong> {ADDRESS}
        </h2>
      </div>
    </main>
  );
};

export default Curriculum;
