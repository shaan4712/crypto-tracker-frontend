import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from "axios";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    //using axios for api fetch
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
    .then((response) => {
      setCoins(response.data);
      //response.data has all coins
    })
    .catch((error) => {
            
    });
  }, [])

  return (
    <div>
        <Header />
        <TabsComponent coins={coins}/>
        {/* passing coins (array of 100 coins - objects) */}
    </div>
  )
}

export default Dashboard