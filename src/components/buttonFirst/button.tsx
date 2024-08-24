interface props {
    name: string,
    action: () => void,
    icon: string,
    size: string
}

function buttonFirst({name, action, icon, size}: props) {
    return ( 
        <button >{name}{icon}</button>
     );
}

export default buttonFirst;