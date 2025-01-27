import { Link, Outlet  } from 'react-router-dom';
import './navigator.css'

export const MainPage = () => (
    <>
    <div style={{'height': '100%'}}>
    <div className='header'>
        <div class="scrolling-text-container">
            <p className='scrolling-text'>#buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно #buynow #вседлядому #швидкотазручно</p>
        </div>
    </div>
    <img src='/Union.png' className='logo'/>
    <nav>
        <ul>
            <li>
                <Link to="/mdse" className='text-header'>Товари</Link>
            </li>
            <li>
                <Link to="/rooms" className='text-header'>Кімнати</Link>
            </li>
            <li>
                <Link to="/design" className='text-header'>Дизайн</Link>
            </li>
        </ul> 
    </nav>
    <div style={{'width': '87px', 'height': '100px', 'top': '48px', 'left': '68.38%', 'padding': '10px 0px 0px 0px', 'gap': '10px', 'opacity': '0px', 'display': 'flex', 'position': 'absolute'}}>
        <img src='/Vector.png' style={{'width': '18.390%', 'height': '20%'}}/>
        <span style={{'width': '33px', 'height': '17px', 'gap': '0px', 'opacity': '0px', 'marginTop': '2px', 'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.75vw', 'fontWeight': '500', 'lineHeight': '17.07px', 'textAlign' : 'left', 'color': 'rgba(95, 95, 95, 1)', 'cursor': 'pointer'}}>Київ</span>
    </div>
    <div style={{'width': '252px', 'height': '36px', 'top': '48px', 'left': '75%', 'padding': '10px 0px 0px 0px', 'gap': '10px', 'opacity': '0px', 'display': 'flex', 'position': 'absolute'}}>
        <img src='/profile.png' style={{'width': '19.9px', 'height': '20.1px'}}/>
        <span style={{'width': '207px', 'height': '17px', 'gap': '0px', 'opacity': '0px','marginTop': '2px', 'fontFamily': 'Montserrat, sans-serif', 'fontSize': '0.73vw', 'fontWeight': '500', 'lineHeight': '17.07px', 'textAlign' : 'left', 'color': 'rgba(95, 95, 95, 1)', 'cursor': 'pointer'}}>Привіт! Увійдіть В Систему</span>
    </div>
    <div style={{'width': '20px', 'height': '18px', 'top': '48px', 'left': '90.208%', 'padding': '10px 0px 0px 0px', 'gap': '10px', 'opacity': '0px', 'display': 'flex', 'position': 'absolute'}}>
        <img src='/magazine.png' style={{'cursor': 'pointer'}}/>
    </div>
    <div style={{'width': '21.09px', 'height': '18px', 'top': '48px', 'left': '92.291%', 'padding': '10px 0px 0px 0px', 'gap': '10px', 'opacity': '0px', 'display': 'flex', 'position': 'absolute'}}>
        <img src='/Vectorlove.png' style={{'cursor': 'pointer'}}/>
    </div>
    <div className='search-box'>
        <img src='/search.png' className='icon'/>
        <input type="text" placeholder="Пошук"></input>
    </div>
    <Outlet/>
    </div>
    </>
);