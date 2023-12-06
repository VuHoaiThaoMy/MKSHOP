import { memo, useState } from "react";
import './style.scss';
import { AiFillFacebook, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formater";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { routers } from "utils/router";

const Header = () => {
    const [isShowCategories, setisShowCategories] = useState(false);

    const [menus] = useState([
        {
            name: "Home",
            path: routers.USER.HOME,
        },
        {
            name: "Products",
            path: routers.USER.PRODUCT,
            isShowSubmenu: false,
            child: [
                {
                    name: "Lipstick",
                    path: "",
                },
                {
                    name: "Perfume",
                    path: "",
                },
                {
                    name: "Specialized Products",
                    path: "",
                },
            ],
        },
        {
            name: "Events",
            path: routers.USER.EVENT,
        },
        {
            name: "Contact Me",
            path: routers.USER.CONTACT,
        }
    ])

    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">

                        <div className="col-6 header__top-left">
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    hello@gmail.com
                                </li>
                                <li>
                                    Freeship for Orders from {formatter(2000000)}
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 header__top-right">
                            <ul>
                                <li>
                                    <Link to={"https://www.facebook.com/thm.aoy1610"}>
                                        <AiFillFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"https://www.instagram.com/thm.aoy/"}>
                                        <AiOutlineInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>LOGIN</span>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header__logo">
                            <h1>MK SHOP</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header__menu">
                            <ul>
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className="header__menu__dropdown">
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                                </li>
                                                            ))
                                                        }

                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>

                    </div>
                    <div className="col-xl-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formatter(1004123)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <AiOutlineShoppingCart />
                                        <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
            <div className="container">
                <div className="row hero__categories_container">
                    <div className="col-lg-3 hero__categories">
                        <div className="hero__categories_all" onClick={() => setisShowCategories(!isShowCategories)}>
                            <AiOutlineMenu />
                            Products List
                        </div>
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to={"#"}>Lipstick</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Perfume</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Skin Cream</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-9 hero__search_container">
                        <div className="hero__search">
                            <div className="hero__search_form">
                                <form>
                                    <input type="" name="" value="" placeholder="What do you want to search?" />
                                    <button type="submit">Search</button>
                                </form>
                            </div>
                            <div className="hero__search_phone">
                                <div className="hero__search_phone__icon">
                                    <AiOutlinePhone />
                                </div>
                                <div className="hero__search_phone__text">
                                    <p>0777.777.789</p>
                                    <span style={{ display: 'flex' }}>Support 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__item">
                            <div className="hero__text">
                                <span>GENUINE HIGH QUALITY PRODUCTS</span>
                                <h2>
                                    Lipstick <br />
                                    100% lead-free
                                </h2>
                                <p>Free delivery</p>
                                <Link to="" className="primary-btn">Buy Now!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);