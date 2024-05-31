export const formatTemperature=(temperature:number):number=>{
  const kelvin=273

  return parseInt((temperature-kelvin).toString())
}
