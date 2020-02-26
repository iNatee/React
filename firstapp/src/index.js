import React, { Component } from 'react'
import { render } from 'react-dom'
import TheSun from './images/TheSun.jpg'
import Beyond from './images/Beyond.jpg'
import GreenMile from './images/GreenMile.jpg'
import Webs from './images/Webs.png'
import Crosswords from './images/Crossword.jpg'
import './index.css'

let bookList = [
    {
        "title": "The Sun Also Rises", "author": "Ernest Hemmingway", "pages": 260, "image": TheSun,
        "link": "https://www.amazon.co.uk/s?k=The+Sun+Also+Rises&ref=nb_sb_noss_2", "formatting": "oddSection"
    },

    {
        "title": "Beyond Good and Evil", "author": "Friedrich Neitzche", "pages": 501, "image": Beyond,
        "link": "https://www.amazon.co.uk/s?k=beyond+good+and+evil&crid=2T4MKKMEJOLOC&sprefix=Beyond+%2Caps%2C240&ref=nb_sb_ss_i_1_7", "formatting": "evenSection"
    },

    {
        "title": "The Green Mile", "author": "Stephen King", "pages": 115, "image": GreenMile,
        "link": "https://www.amazon.co.uk/s?k=The+Green+Mile+Book&ref=nb_sb_noss_2", "formatting": "oddSection"
    },

    {
        "title": "Webs of Influence", "author": "Nathalie Nahai", "pages": 380, "image": Webs,
        "link": "https://www.amazon.co.uk/s?k=Webs+Of+Influence&ref=nb_sb_noss_2", "formatting": "evenSection"
    },

    {
        "title": "Great Book of Crosswords", "author": "Stephen Fry", "pages": 550, "image": Crosswords,
        "link": "https://www.amazon.co.uk/s?k=The+Great+Book+of+Crosswords&ref=nb_sb_noss", "formatting": "oddSection"
    }
]

const Book = ({ title = "No Title Provided", author = "No Author",
    pages = 0, image = "No Image Availible", bookmark = "n/a", link = "https://en.wikipedia.org/wiki/HTTP_404", formatting = "body" }) => {
    return (
        <section class={formatting}>
            <hr />
            <h1>{title}</h1>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <br />
            <br />
            <a href={link}><img alt={Book.image} src={image} height={150} /></a>
            <p>Free bookmark? {bookmark}</p>
        </section>
    )
};

const Hiring = () =>
    <div>
        <p>We hiring! Go to <code><u>www.bookshop.com/jobs</u></code> for more</p>
    </div>

const NotHiring = () =>
    <div>
        <p>We are not hiring! Check back later</p>
    </div>


class Library extends React.Component {

    static defaultProps = {
        books: [
            { "title": "No Book available", "author": "n/a", "pages": 0, "image": "No Image Availible", "bookmark": "n/a", "formatting": "oddSection" }
        ]
    };

    state = {
        open: true,
        hiring: true,
        isBookmark: "",
        data: [],
        loading: false,
    };

    componentDidMount() {

        if ((Math.random().toPrecision(1) * 10) % 2 === 0) {
            this.setState({
                isBookmark: "Yes"
            })
        } else {
            this.setState({
                isBookmark: "No"
            })
        }
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    toggleHiringNot = () => {
        this.setState(prevState => ({
            hiring: !prevState.hiring
        }))
    }

    addItem = () => {
        this.setState(prevState => ({
            cart: prevState.cart + 1

        }))
    }

    clearCart = () => {
        this.setState(prevState => ({
            cart: prevState.cart = 0

        }))
    }

    render() {
        const { books } = this.props
        return (

            <div>

                <h1>The bookshop is {this.state.open ? 'open' : 'closed'}</h1>
                {this.state.hiring ? <Hiring /> : <NotHiring />}
                <button id="btnOpenClose" onClick={this.toggleOpenClosed}>Open / Close</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button id="btnHiring" onClick={this.toggleHiringNot}>Hiring / Not Hiring</button>
                <br />
                <br />
                {books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            pages={book.pages}
                            image={book.image}
                            bookmark={this.state.isBookmark}
                            formatting={book.formatting}
                            link={book.link} />
                )}
            </div>
        )
    }
}

render(
    <Library books={bookList} />,
    document.getElementById('root')
)