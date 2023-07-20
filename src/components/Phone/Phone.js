import TextMsg from '../Messages/TextMsg';
import PictureMsg from '../Messages/PictureMsg';
import QuestionMsg from '../Messages/QuestionMsg';

import Header from './Header';
import Input from './Input';
import Chat from './Chat';

import {useState} from 'react';

import dog1 from '../../images/dog-image-1.jpg';
import dog2 from '../../images/dog-image-2.jpg';
import dog3 from '../../images/dog-image-3.jpg';

const questions = [
    { text: '30 minute walk', value: '$29' },
    { text: '1 hour walk', value: '$49' }
];
const Phone = () => {

    const [messagesList, setMessagesList] = useState([
        <TextMsg origin="from" text="That sounds great. I’d be happy to discuss more." />,
        <TextMsg origin="from" text="Could you send over some pictures of your dog, please?" />,
        <PictureMsg origin="to" images={[dog1, dog2, dog3]} />,
        <TextMsg origin="to" text="Here are a few pictures. She’s a happy girl!" />,
        <TextMsg origin="to" text="Can you make it?" />,
        <TextMsg origin="from" text="She looks so happy! The time we discussed works. How long shall I take her out for?" />,
        <QuestionMsg origin="from" question_name="duration" questions={questions} />,
    ]);

    const [msg, setMsg] = useState('');
    const sendMessage = () => {
        if (msg !== '') {
            setMessagesList([...messagesList, <TextMsg origin="to" text={msg} />])
            setMsg('');
        }
    };

    return (
        <div className="z-10 relative h-[505px] w-[247px] bg-white rounded-[30px] shrink-0 flex flex-col p-2.5 shadow-phone_shadow">
            <div className="bg-chat_background rounded-[20px] h-full border-[1px] border-chat_border flex flex-col overflow-hidden">
                <Header />
                <div className="px-2 py-2.5 flex-1 flex flex-col justify-between gap-4">
                    <Chat messagesList={messagesList} />
                    <Input msg={msg} setMsg={setMsg} sendMessage={sendMessage} />
                </div>
            </div>
        </div>
    );
};

export default Phone;
