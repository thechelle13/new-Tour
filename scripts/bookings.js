import { getBookings, getBands } from "./database.js";

const bookings = getBookings()
const bands = getBands()

// add event listener that displays on multi lines 
// Rocket Pumpkins
// EDM
// Formed in 2005
// 3 band members

document.addEventListener (
    "click",
    (thisClick) => {
        const itemClicked = thisClick.target
        for (const band of bands) {
            if (itemClicked.dataset.type === "booking") {
                
                window.alert(`${band.name}\n${band.genre}\nFormed:${band.formed}\nBand #${band.members}`)
            }
        }    
    }
)



export const Bookings = () => {
    let bookingHTML = "<ul>"


        for(const book of bookings) {
            //const currentBookings = findBookings(book)
            bookingHTML += `<li data-type="booking"
                                
            
                                >${book.name} is performing at ${book.venue}</li>`
        }
    bookingHTML += "</ul>"
    return bookingHTML
}