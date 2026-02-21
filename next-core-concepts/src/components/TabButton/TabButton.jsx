function TabButton({ children, onClick, isActive }) {
    function handleClick() {
        console.log('Clicked tab:', children);
        if (onClick) {
            onClick();
        }
    }
    return (
        <li>
            <button
                className={isActive ? 'active' : ''}
                onClick={handleClick}
            >
                {children}
            </button>
        </li>

    );
}

export default TabButton;