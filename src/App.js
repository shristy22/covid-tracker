import React from 'react';


import {Cards, Chart,CountryPicker} from './components';
import styles from './App.module.css'; 
import { fetchData } from './api';

import coronaImage from './images/coronavirus_logo-2.jpg';

class App extends React.Component {
  state={
    data:{},
    country: '',
  }
    async componentDidMount(){
      const fetcheddata= await fetchData();
      this.setState({data: fetcheddata});
      // console.log(data);
    }

     handleCountryChange = async (country) => {
      const fetcheddata= await fetchData(country);
      this.setState({data : fetcheddata, country: country});
      // console.log(fetcheddata); 
      // console.log(country); 
    }

   render(){
     const {data, country} = this.state;
    return(
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19"/>
        <Cards data={data}/> 
        <CountryPicker handleCountryChange={this.handleCountryChange  }/>
        <Chart data={data} country={country}/>    
      </div>
    )
  }
}
export default App;

