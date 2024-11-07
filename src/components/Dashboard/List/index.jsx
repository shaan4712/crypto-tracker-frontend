import React from 'react'
import './styles.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';


const List = ({coin}) => {
  return (
    <tr className='list-row'>
        <Tooltip title={coin.name}>
        <td className='td-image'>
            <img src={coin.image} className='coin-logo' />
        </td>
        </Tooltip>

        <Tooltip title="Coin info" placement='bottom-start'>
        <td>
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
        </td>
        </Tooltip>

        <Tooltip title="Price change In 24h" placement='bottom-start'>
        {coin.price_change_percentage_24h > 0 ? (
        <td className='chip-flex'>
              <div className='price-chip'>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className='icon-chip'>
                <TrendingUpRoundedIcon />
              </div>
        </td> )
        :
        (
          <td className='chip-flex'>
              <div className='price-chip chip-red'>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className='icon-chip icon-chip-red'>
                <TrendingDownRoundedIcon />
              </div>
          </td>
        )}
        </Tooltip>

        <Tooltip title="Current Price">
        <td>
            <h3 className='coin-price td-center-align' 
            style={{color: coin.price_change_percentage_24h > 0 ? 
            "var(--green)" : "var(--red)"}}>
                ${coin.current_price.toLocaleString()} </h3>
        </td>
        </Tooltip>
                
        <Tooltip title="Total Volume" placement='bottom-end'>         
        <td>
        <p className='total-volume td-right-align'>
        {coin.total_volume.toLocaleString()}</p>
        </td>
        </Tooltip>
        
        <Tooltip title="Market Cap" placement='bottom-end'>
        <td>
        <p className='total-volume td-right-align'>
        {coin.market_cap.toLocaleString()}</p>
        </td>
        </Tooltip>
    </tr>
  )
}

export default List