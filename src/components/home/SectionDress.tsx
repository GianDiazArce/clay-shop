import React from "react";
import "./homeStyles.css";

export const SectionDress = () => {
    return (
        <section className="dress container">
            <div className="dress__texts">
                <h2 className="dress__title">
                    Admire Stylish Dresses {"&"} Looks
                </h2>
                <p className="dress__paragraph">
                    If we wanted to build a human-level tool to offer automated
                    outfit advice, we needed to understand people’s fashion
                    taste.
                </p>
                <button className="dress__button">Show More</button>
                {/* <div className="dress__social">
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebookF />
                </div> */}
            </div>
        </section>
    );
};
