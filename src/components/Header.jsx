import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, RefreshCw, Moon, Sun } from 'lucide-react';
import Search from './Search';
import styles from './Header.module.css';

const Header = ({ onReset, theme, toggleTheme, onSelectCareer }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logoLink}>
                    <div className={styles.logo}>
                        <GraduationCap size={32} color="var(--primary-color)" />
                        <div>
                            <h1>CareerPath India</h1>
                            <p>Your Future, Your Choice</p>
                        </div>
                    </div>
                </Link>

                <nav className={styles.nav}>
                    <Link to="/" className={location.pathname === '/' ? styles.activeLink : styles.link}>Home</Link>
                    <Link to="/aptitude-test" className={location.pathname === '/aptitude-test' ? styles.activeLink : styles.link}>AI Guide</Link>
                    <Link to="/forum" className={location.pathname === '/forum' ? styles.activeLink : styles.link}>Forum</Link>
                    <Link to="/news" className={location.pathname === '/news' ? styles.activeLink : styles.link}>News</Link>
                </nav>

                <div className={styles.actions}>
                    <Search onSelectCareer={onSelectCareer} />
                    <button className={styles.iconBtn} onClick={toggleTheme} title="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    {isHome && (
                        <button className={styles.resetBtn} onClick={onReset} title="Restart Journey">
                            <RefreshCw size={20} />
                            <span>Restart</span>
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
