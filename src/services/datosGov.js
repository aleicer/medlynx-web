import axios from 'axios'

export async function getMedications(search, type) {
  return await axios
    .get(process.env.NEXT_PUBLIC_MEDLYNX_BACKEND + '/datos-gov/suggestions?search=' + search + '&type=' + type)
}

export async function getSpecificMedicine(search, type) {
  return await axios.get(process.env.NEXT_PUBLIC_MEDLYNX_BACKEND + '/datos-gov/search?expediente=' + search.expediente + '&consecutivocum=' + search.consecutivocum + '&cantidadcum=' + search.cantidadcum + '&type=' + type)
}

