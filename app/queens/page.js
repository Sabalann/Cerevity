import './queens.css';
import Navbar from '../../components/Navbar';
import BorderButton from '@/components/buttons/BorderButton';

export default function QueensPage() {
    return (
      <div className='justify-items-center h-full'>
        <Navbar/>
        <div className='game-container'>
          <div className='borderBackground mb-4'>
            <div className="queensBoard">
            </div>
          </div>
          <div className='w-full flex justify-between'>
            <BorderButton text={'Start'}/>
            <BorderButton text={'Hint'}/>
          </div>
        </div>
      </div>
    );
  }