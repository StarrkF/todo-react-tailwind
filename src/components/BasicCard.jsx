import '../assets/components/checkboxes.css';

function CardBasic({ title, glow = false, customStyle = {header: null, content: null}, children }) {

    return (
        <div className={(glow ? 'shadow-glow shadow-slate-400 hover:shadow-slate-700 hover:shadow-glow-xl dark:shadow-slate-400' : '') + " p-8 m-4 text-dark bg-gradient-to-r from-gray-100 to-gray-300 border-2 rounded-lg dark:bg-gradient-to-r dark:from-gray-800  dark:via-gray-900  dark:to-black dark:border-black dark:text-light duration-500"}>
            <h5 className={ customStyle.header +  " mb-8 text-3xl font-bold tracking-wide text-dark dark:text-light"}>{ title }</h5>
            <div className={"my-8 sm:my-20 " + customStyle.content}>
                {children}
            </div>
        </div>
    );
}

export default CardBasic;
