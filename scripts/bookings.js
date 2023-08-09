import { getBookings, getVenues } from "./database.js";
const bookings = getBookings()
//const liveVenue = getVenues()

// add event listener that displays on multi lines 
// Rocket Pumpkins
// EDM
// Formed in 2005
// 3 band members


// const findBookings = (venue, allBands) => {
//     let bookingAssignments = null
//     // debugger
//     for (const band of allBands) {
//         if(band.id === venue.bandId) {
//             bookingAssignments = band
//         }
//     } 
//     return bookingAssignments
// }


export const Bookings = () => {
    let bookingHTML = "<ul>"


        for(const book of bookings) {
            //const currentBookings = findBookings(book)
            bookingHTML += `<li>${book.name} is performing at ${book.name}</li>`
        }
    bookingHTML = "</ul>"
    return bookingHTML

}