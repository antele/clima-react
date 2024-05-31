import styles from './App.module.css'
import Form from './components/Form/Form'
import useWeather from './hooks/useWeather'
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import Spinner from './Spinner/Spinner';
import Alert from './components/Alert/Alert';

function App() {
  const{fetchWeather,hasWeatherData, weather, loading, notFound}=useWeather()
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />

        { loading && <Spinner/>}
        {hasWeatherData && <WeatherDetail weather={weather}/>}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  )
}

export default App
