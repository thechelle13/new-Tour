import { getBands, getBookings } from "./database.js";

const bands = getBands()
const bookings = getBookings ()


// add event listener "When a band name is clicked, a window alert should be presented to the user that displays all of the venue at which the band is playing."

document.addEventListener (
    "click",
    (thisClick) => {
        const itemClicked = thisClick.target

        if (itemClicked.dataset.type === "band") {

        } window.alert(``)
    }
)

export const Bands = () => {
    let bandHTML = "<ul>"
    for (const band of bands) {
        bandHTML += `<li data-type="band">${band.name}</li>`
    }
    bandHTML += "</ul>"
    return bandHTML
}