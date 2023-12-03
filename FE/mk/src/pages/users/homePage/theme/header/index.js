import { memo } from "react";
import './style.scss';
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/formater";;

const Header = () => {
    return (
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
    );
};

export default memo(Header);