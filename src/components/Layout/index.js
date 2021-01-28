import l from './style.module.css';


const Layout = ({id, title, descr, urlBg, colorBg}) => {
   const classNames = [l.desc,l.full].join(' ');
    return(
    <>
    <section className={l.root} id={id} style={colorBg ? {backgroundColor:colorBg } : {backgroundImage:`url(${urlBg})`} }>
        <div className={l.wrapper}>
            <article>
                <div className={l.title}>
                    <h3>{title}</h3>
                    <span className={l.separator}></span>
                </div>
                <div className={classNames}>
                    <p>{descr}</p>
                </div>
            </article>
        </div>
    </section>
</>
   )
}

export default Layout;