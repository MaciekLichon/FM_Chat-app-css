const Container = (props) => {
    return (
        <div className="max-w-[817px] box-content mx-auto px-8 py-16 flex flex-col gap-16 items-center md:flex-row md:items-center md:justify-between lg:w-full">{props.children}</div>
    );
};

export default Container;
