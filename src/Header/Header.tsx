import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineProject, AiOutlineHome} from 'react-icons/ai'
import {IoChatboxEllipsesOutline} from 'react-icons/io5'
import {MdOutlineContacts} from 'react-icons/md'
import './Header.scss'
import packageInfo from '../../package.json';

function Header() {  
    const {name} = packageInfo;
    const [sideMenu, setSideMenu] = useState(false);
    const [menuPos, setMenuPos] = useState([-60,20]);

    const functions = {
        mouseOverLinks: (e : React.MouseEvent<HTMLElement>)=>{const pos = e.currentTarget.getBoundingClientRect(); setMenuPos([pos.left, pos.top, pos.width])},
        checkPage: (page : string) : boolean => { return location.pathname.includes(page) ? true : false },
        checkPageFill: (page : string) : string => { return functions.checkPage(page) ? 'empty' : 'fill' },
        checkPageWhite: (page : string) : string => { return functions.checkPage(page) ? 'white' : '' },
    }
    
    const location = useLocation();

    useEffect(() => {
        console.log('Location changed');
    }, [location]);
    return (
        <>
            <div className={"side-menu "+(sideMenu ? ('show') : ('hide'))}>
                <div className="buttons">
                <div className="image_container flex">
                    <img src="" />
                </div>
                    <div className="group_buttons">
                        <h1>Menus</h1>
                        <Link className={'flex align btn-side '+(location.pathname == "/" ? 'empty' : 'fill') } to='/'><AiOutlineHome/> Home</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("projetos")) } to='/projetos'><AiOutlineProject/> Projetos</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("sobre")) } to='/sobre'><IoChatboxEllipsesOutline /> Sobre</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("contato")) } to='/contato'><MdOutlineContacts /> Contato</Link>
                    </div>
                    
                    <div className="group_buttons">
                        <h1>Projetos</h1>
                        <Link className={'flex align btn-side '+(location.pathname == "/" ? 'empty' : 'fill') } to='/'><AiOutlineHome/> Back-end</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("projetos")) } to='/projetos'><AiOutlineProject/> Mobile</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("sobre")) } to='/sobre'><IoChatboxEllipsesOutline /> Front-end</Link>
                        <Link className={'flex align btn-side '+(functions.checkPageFill("contato")) } to='/contato'><MdOutlineContacts /> Outros</Link>
                    </div>
                    
                </div>
            </div>
            <header className="navbar">
                <div style={{ filter: functions.checkPage('projetos') ? 'invert()' : '' }} className="menu-btn" onClick={()=>setSideMenu(!sideMenu)}/>
                <div className="title">
                    {name}
                </div>
                <div className="links flex align">
                    <Link to='/'>Home</Link>
                    <Link to='/projetos'>Projetos</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/contato'>Contato</Link>
                </div>
            </header>
        </>
    );
}

export default Header;