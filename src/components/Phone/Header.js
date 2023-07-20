import arrowLeft from "../../images/arrow-left.svg";
import avatar from "../../images/avatar.jpg";
import dots from "../../images/dots.svg";

const Header = () => {
    return (
        <div className="pb-3 px-4 pt-[30px] bg-gradient_brand shadow-header_shadow rounded-bl-md rounded-br-md flex items-center justify-between
                    after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:bg-white after:h-[29px] after:w-[129px] after:rounded-bl-[14px] after:rounded-br-[14px]">
            <div className="flex items-center gap-2">
                <button>
                    <img src={arrowLeft} alt="arrow left"/>
                </button>
                <div className="flex items-center gap-2">
                    <img src={avatar} alt="avatar" className="w-6 h-6 rounded-full border-[1px] border-white border-solid"/>
                    <div>
                        <p className="text-white text-chat_accent font-medium mb-0.5">Samuel Green</p>
                        <p className="text-chat-200 text-chat">Available to Walk</p>
                    </div>
                </div>
            </div>
            <button>
                <img src={dots} alt="three dots"/>
            </button>
        </div>
    );
};

export default Header;
