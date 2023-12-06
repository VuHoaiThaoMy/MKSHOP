import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";

const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer__about">
                        <h1 className="footer__about_logo">MK SHOP</h1>
                        <ul>
                            <li>Address: 304 Nguyen Duy</li>
                            <li>Phone: 0778-763-935</li>
                            <li>Email: mk1610@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer__widget">
                        <h6>Stores</h6>
                        <ul>
                            <li>
                                <Link to="">Contact</Link>
                            </li>
                            <li>
                                <Link to="">Information about us</Link>
                            </li>
                            <li>
                                <Link to="">Bussiness Products</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="">Account Information</Link>
                            </li>
                            <li>
                                <Link to="">Cart</Link>
                            </li>
                            <li>
                                <Link to="">Favorites List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div className="footer__widget">
                        <h6>Promotion & Concessionary</h6>
                        <p>Sign up to recieve Information here</p>
                        <form action="#">
                            <div className="input-group">
                                <input type="text" placeholder="Enter Email" />
                                <button type="submit" className="button-submit">Sign Up</button>
                            </div>
                            <div className="footer__widget-social">
                                <div>
                                    <AiFillFacebook />
                                </div>
                                <div>
                                    <AiFillInstagram />
                                </div>
                                <div>
                                    <AiFillPhone />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>;
}

export default memo(Footer);