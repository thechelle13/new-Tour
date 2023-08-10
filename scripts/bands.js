import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const bookings = getBookings ()
const venues = getVenues()


// add event listener "When a band name is clicked, a window alert should be presented to the user that displays all of the venue at which the band is playing."

document.addEventListener (
    "click",
    (thisClick) => {
        const itemClicked = thisClick.target
        
                if (itemClicked.dataset.type === "band") {                
                    //for (const book of bookings){
                        
                        window.alert(`This ${itemClicked.dataset.bandName} is playing at ${itemClicked.dataset.venueId}`)         
                    }   
            }     
         
)

export const Bands = () => {
    for (const venue of venues) {
    let bandHTML = "<ul>"
    for (const band of bands) {
        
        bandHTML += `<li    data-type="band"
                            data-venueId="${venue.name}"
                            data-name="${band.name}"
                            data-bandName=${band.name}
                            >${band.name}</li>`
    }
    bandHTML += "</ul>"

    return bandHTML
}
}