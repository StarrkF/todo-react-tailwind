import "../assets/components/buttons.css"

function CustomButton({ color = "primary", className, children, onClick }) {
    return (
        <button onClick={onClick} className={className + "  w-full py-2 px-4 shadow-md rounded-2xl duration-300 active:scale-110 hover:scale-105 hover:shadow-lg text-white font-medium btn-" + color}>
            {children}
        </button>
    );
  }
  
  export default CustomButton;