import arrowRight from "../../images/arrow-right.svg";

const Input = ({msg, setMsg, sendMessage}) => {
    return (
        <div className="bg-white h-8 py-1 pr-1 pl-5 rounded-3xl w-full flex align-center justify-between gap-4">
            <input type="text" value={msg} placeholder="Type a message..." onChange={(e) => setMsg(e.target.value)} className="text-chat_input mt-1 flex-1 focus:outline-0"/>
            <button onClick={sendMessage} className="bg-header text-white w-6 h-6 rounded-full">
                <img src={arrowRight} alt="arrow right"/>
            </button>
        </div>
    );
};

export default Input;
