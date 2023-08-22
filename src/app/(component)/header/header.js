import React from 'react';
import Link  from 'next/link';
const Header = (props) => {
    return (
        <div>
  <section class="Sub-header">
        <nav>
            <Link href="/" class="logo">Xplore
                <i class="fab fa-staylinked"></i>kill
            </Link>
            <div class="nav-links" id="navLinks">
             
                <i class="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <i class="fa fa-bars" onclick="showMenu()"></i>
        
        </nav>
        <h1>{props.title}</h1>
    </section>
        </div>
    );
}

export default Header;
