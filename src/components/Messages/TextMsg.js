const TextMsg = ({origin, text}) => {
    return (
        <div data-origin={origin} className={`py-1.5 px-2 text-chat w-32 rounded-[10px] font-chat break-words animate-showMsg
                        ${origin === 'from' ? 'text-chat-300 bg-chat-100 rounded-bl origin-left' : 'text-chat-400 bg-white rounded-br self-end shadow-message_shadow origin-right'}`}>
            <p>{text}</p>
        </div>
    );
}

export default TextMsg;
