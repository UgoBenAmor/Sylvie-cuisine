const Tag = ({ chapitre }) => {
    const getColor = () => {
        let color
        switch (chapitre) {
            case 'Méditerranée':
                color = 'rgb(73,151,225)'
                break
            
            default:
                color = 'rgb(129,138,210)'
        }
        return color
       
       
    }
    
    return (
       
        <div style={{ backgroundColor: getColor()}} className="tag">{chapitre}</div>
    )
}

export default Tag