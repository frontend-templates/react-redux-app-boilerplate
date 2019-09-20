import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavBar.scss';
import classNames from 'classnames';

const Links = () => (
    <aside className={styles.navMenu}>
        <NavLink className={styles.navMenuItem} activeClassName={styles.navMenuItemActive} to="/home">About</NavLink>
        <NavLink className={styles.navMenuItem} activeClassName={styles.navMenuItemActive} to="/repos">Repositories</NavLink>
        <NavLink className={styles.navMenuItem} activeClassName={styles.navMenuItemActive} to="/author">Author</NavLink>
    </aside>
);

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNavMenu: false,
        };
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }
    toggleMobileMenu () {
        this.setState({openNavMenu: !this.state.openNavMenu});
    }
    render() {
        return (
            <div className={styles.nav}>
                <div className={styles.navDesktopMenu}>
                    <Links />
                </div>
                <div className={classNames(styles.navMobile, { [styles.navMobileActive]: this.state.openNavMenu })} onClick={this.toggleMobileMenu}>
                    <i className="fa fa-list"></i>
                </div>
                <div className={classNames(styles.navMobileMenu, { [styles.show]: this.state.openNavMenu })}>
                    <Links />
                </div>
            </div>
        );
    }
};
