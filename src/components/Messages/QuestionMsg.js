const QuestionMsg = ({origin, question_name, questions}) => {
    return (
        <div data-origin={origin} className="flex flex-col gap-2">
            {questions.map((question, index) => (
                <div key={index} className={`py-2.5 pl-2 pr-4 flex items-center justify-between bg-gradient_brand_rev rounded-[10px] w-[160px] break-words animate-showMsg ${origin === 'from' ? 'rounded-bl origin-left' : 'rounded-br self-end origin-right'}`}>
                    <div className="flex items-center gap-2">
                        <input type="radio" name={question_name}/>
                        <p className="text-chat text-white">{question.text}</p>
                    </div>
                    <p className="text-chat_accent text-white font-bold">{question.value}</p>
                </div>
            ))}
        </div>
    );
};

export default QuestionMsg;
