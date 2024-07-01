export const getCurrentDate = () => {
  const currentDate = new Date()
  const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long' ,
    day: 'numeric'
  }

  const formateDate = currentDate.toLocaleDateString('en-US', option)
  return formateDate
}
 