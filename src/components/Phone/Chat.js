import {useEffect, useRef} from "react";

const Chat = ({messagesList}) => {

    const ref = useRef();
    const scroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } = ref.current;
        if (scrollHeight <= scrollTop + offsetHeight + 100) {
            ref.current?.scrollTo(0, scrollHeight)
        }
    }

    useEffect(() => {
        scroll();
    }, [messagesList]);

    return (
        <div ref={ref} className="flex flex-col gap-2 overflow-auto h-[346px] scroll-smooth">
            {messagesList}
        </div>
    );
};

export default Chat;
