import styleLogo from './Logo.module.css'

const Logo =()=>{
    return(
        <div className={styleLogo.logoTextContainer}>
            <span className={styleLogo.logoText}>Intocode Coding Shopcamp</span>
        </div>
    )
}

export default Logo