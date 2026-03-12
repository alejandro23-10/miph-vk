import { Outlet, useNavigate } from 'react-router';
import './MainLayout.css'
import Chats from '../pages/Chat';

export default function MainLayout() {
    let navigate = useNavigate();

    return (
        <div>
            <Outlet />
            <div className='navigator'>
                <button onClick={() => navigate('Chats')}>
                    Ленточка тикитока
                </button>
            </div>
            <div className='navigator'>
                <button onClick={() => navigate('ChatId')}>
                    Чатик с фсб 
                </button>
            </div>
            <div className='navigator'>
                <button onClick={() => navigate('Profile')}>
                    Профиль
                </button>
            </div>
        </div>
    )

}