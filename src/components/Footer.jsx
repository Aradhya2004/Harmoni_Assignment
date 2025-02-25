import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We are an online store dedicated to providing the best products at affordable prices. Shop with us and experience the convenience of online shopping!</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/">Shop</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="#">Privacy Policy</NavLink></li>
                        <li><NavLink to="#">Terms of Service</NavLink></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Email: support@ecommerce.com</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Address: 123 E-commerce St, City, Country</li>
                    </ul>
                </div>

                <div className="footer-section social-media">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</NavLink></li>
                        <li><NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</NavLink></li>
                        <li><NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</NavLink></li>
                        <li><NavLink to="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</NavLink></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} E-Commerce Website. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
