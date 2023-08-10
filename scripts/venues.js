import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

// add event listener that does "Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023" 
// document.addEventListener (
//     "click",
//     (thisClick) => {
//         const itemClicked = thisClick.target
//         //let currentBands = ""
//             if (itemClicked.dataset.type === "venue") {
//                 let venueLoc = itemClicked.dataset.id
//                     for (const book of bookings) {
//                          // debugger
//                             if (itemClicked.dataset.venueId === book.venueName) {
//                                 for(const band of bands) { 

//                                     //if(band.bandId === book.bandId) {
//                                         //currentBands += band.name
//                                     //} 
                                    
//                                 } 
//                             }                 
//             } window.alert(`${band.name} is rocking at ${band.name} `)
//         }
//     }        
// )
document.addEventListener (
    "click",
    (thisClick) => {
        const itemClicked = thisClick.target
         
        
                if (itemClicked.dataset.type === "venue") {                
                        window.alert(`This ${itemClicked.dataset.venueName} is rocking at ${itemClicked.dataset.city} on ${itemClicked.dataset.date}`)         
                    }   
            }     
)

export const Venues = () => {
    
    let venueHTML = "<ul>"
    for (const venue of venues) {
        venueHTML += `<li   data-type="venue" 
                            data-venueName="${venue.name}"
                            data-city="${venue.address}"
                            data-date="${venue.date}"
                            >${venue.name}</li>`
    }
    
    venueHTML += "</ul>"
    return venueHTML
    
}





// document.addEventListener (
//     "click",
//     (thisClick) => {
//         const itemClicked = thisClick.target
//         if(itemClicked.id.startsWith("venue")) {
//             let [,bandKey] = itemClicked.id.split("--")

//             let matchingBand = null
//             for(let band of bands) {
//                 if(band.id === parseInt(bandKey)) {
//                     matchingBand = band
//                 }
//             }
//             let matchingBooking = null
//             for (let book of bookings) {
//                 if (book.name === matchingBand.venueName) {
//                     matchingBooking = book
//                 }
//             }
//            // window.alert (`${matchingBand} is playing at ${matchingBooking.name}`)
//         }  window.alert (`${matchingBand} is playing at ${matchingBooking.name}`)
//     }
// )