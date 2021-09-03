import React from "react";
import "./homeStyles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { productos } from "../../db/product-list";

export const MainContent = () => {
    return (
        <main className="main container">
            <div className="cards">
                <div className="card collection">
                    <div className="collection__texts">
                        <h2 className="title">Women Collection</h2>
                        <p className="paragraph">Spring 2020</p>
                        <button className="btn">Popular</button>
                    </div>
                </div>
                <div className="card bestSeller">
                    <div className="bestSeller__texts">
                        <p className="paragraph">24 items</p>
                        <h2 className="title">Bestsellers</h2>
                    </div>
                </div>
                <div className="card jacket">
                    <div className="jacket__texts">
                        <button className="btn">New</button>
                        <h2 className="title">Dresses</h2>
                    </div>
                </div>
                <div className="card denim">
                    <div className="denim__texts">
                        <button className="btn"> hola</button>
                        <h2 className="title">Denim Jackets</h2>
                    </div>
                </div>
            </div>
            <div className="main__products products">
                <FaChevronLeft className="chevron " />
                <div className="products__container">
                    {productos.map((product) => (
                        <div className="product__item">
                            <figure className="product__picture">
                                <img
                                    className="product__img"
                                    src={`./assets/img/products/${product.img}`}
                                    alt={product.brand}
                                />
                            </figure>
                            <h3 className="paragraph product__title">
                                {product.brand}
                            </h3>
                        </div>
                    ))}
                </div>
                <FaChevronRight className="chevron " />
            </div>
            <div className="main__suggestion">
                <h2 className="title">You may like</h2>
                <div className="cardsShop">
                    <div className="cardShop">
                        <figure className="cardShop__picture">
                            <img
                                src="./assets/img/card-img1.png"
                                alt="vest gucci"
                                className="cardShop__img"
                            />
                        </figure>
                        <div className="cardShop__texts">
                            <h2 className="title">Women's black vest Gucci</h2>
                            <p className="paragraph">
                                This is a wonderful black vest, which is well
                                suited for parties and also great…
                            </p>
                            <div className="cardShop__footer">
                                <h2 className="title">$ 715</h2>
                                <button className="cardShop__btn">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cardShop">
                        <figure className="cardShop__picture">
                            <img
                                src="./assets/img/card-img2.png"
                                alt="vest gucci"
                                className="cardShop__img"
                            />
                        </figure>
                        <div className="cardShop__texts">
                            <h2 className="title">Red dress Valentino</h2>
                            <p className="paragraph">
                                A very stylish and sexy dress for special
                                occasions and for social events, impre…
                            </p>
                            <div className="cardShop__footer">
                                <h2 className="title">$ 1610</h2>
                                <button className="cardShop__btn">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cardShop">
                        <figure className="cardShop__picture">
                            <img
                                src="./assets/img/card-img3.png"
                                alt="vest gucci"
                                className="cardShop__img"
                            />
                        </figure>
                        <div className="cardShop__texts">
                            <h2 className="title">Shiny dress Givenchy</h2>
                            <p className="paragraph">
                                A shiny dress in the style of Lady Gaga, for
                                bright events and cool parties…
                            </p>
                            <div className="cardShop__footer">
                                <h2 className="title">$ 540</h2>
                                <button className="cardShop__btn">
                                    Shop now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};