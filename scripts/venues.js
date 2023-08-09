import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

// add event listener that does "Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023" 
document.addEventListener (
    "click",
    (thisClick) => {
        const itemClicked = thisClick.target
        let currentBands = ""
            if (itemClicked.dataset.type === "venue") {
                let venueLoc = itemClicked.dataset.name
                    for (const book of bookings) {
                        
                            if (itemClicked.dataset.venueId === book.venueId) {
                                for(const band of bands) 

                                    if(band.bandId === book.bandId) {
                                        currentBands += band.name
                                    }
                            }
                    }   window.alert(`${currentBands} is rocking at ${venueLoc}`)
            } 
    } 
)

export const Venues = () => {
    let venueHTML = "<ul>"
    for (const venue of venues) {
        venueHTML += `<li data-type="venue" data-venueId>${venue.name}</li>`
    }
    venueHTML += "</ul>"
    return venueHTML
}