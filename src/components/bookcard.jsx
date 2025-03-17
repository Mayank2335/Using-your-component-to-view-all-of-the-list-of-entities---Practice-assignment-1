// write the book component code here
const BookCard = ({book}) => {
    


    return(
        <div className="parent">
        <img style={{width: "400px"}} src={book.image} alt="Book Image"/>
        <h2>Book Name: {book.name}</h2>
        <h3>Genre: {book.genre} </h3>
        <h3>Author: {book.author} </h3>
        </div>
    )
}

export default BookCard