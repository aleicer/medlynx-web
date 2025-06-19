import axios from 'axios'

export async function getMedications(search, type) {
    return await axios
        .get(process.env.NEXT_PUBLIC_MEDLYNX_BACKEND + '/datos-gov/suggestions?search=' + search + '&type=' + type)
}

export async function getEspedificMedicine(search, type) {
    return await axios.get(process.env.NEXT_PUBLIC_MEDLYNX_BACKEND + '/datos-gov/search?expediente=' + search.expediente + '&consecutivocum=' + search.consecutivocum + '&nombrerol=' + search.nombrerol + '&type=' + type)
}

