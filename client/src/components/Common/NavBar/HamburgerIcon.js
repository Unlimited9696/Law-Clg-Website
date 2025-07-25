import React from 'react'
import styles from './HamburgerIcon.module.css'

export default function HamburgerIcon({ NavOpen }) {
    return (
        <div id={styles.navicon} className={`${NavOpen ? styles.open : ''}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
