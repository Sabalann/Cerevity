import './queens.css'

export default function QueensPage() {
    return (
      <div className='justify-items-center h-full pt-36'>
        <div className='game-container'>
          <div className='borderBackground mb-4'>
            <div className="queensBoard">
            </div>
          </div>
          <div className='w-full flex justify-between'>
            <div className='borderBackground'><button className='button'>Start</button></div>
            <div className='borderBackground'><button className='button'>Hint</button></div>
          </div>
        </div>
      </div>
    );
  }