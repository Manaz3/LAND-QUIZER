
import { useSelector } from 'react-redux'
import { RootState } from '../../types/redux/store';
import Card from '../Card/Card'


function MainPage():JSX.Element {
    const { flashes } = useSelector((store: RootState) => store.flash)
    return (
        <div className='container'>
            {flashes.map((flash) => 
            <Card flash={flash}/>
        )}

        </div>
    )
}

export default MainPage;