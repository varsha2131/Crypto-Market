import React from 'react'
import {Statistic,Card,Skeleton } from 'antd';
import useCryptomarkets from '../../hooks/useCryptomarkets';
import useCryptostats from '../../hooks/useCryptostats';
import millify from 'millify';

const GlobalcryptoStats = () => {
    let {GlobalStats,isloading,isError}=useCryptomarkets()
    let {total,total24hVolume,totalCoins,totalExchanges,totalMarketCap,totalMarkets}=GlobalStats
    let {stats,isloading:loading,isError:error}=useCryptostats()
   //  console.log("g:",GlobalStats)
   //  console.log("g:",stats)
  return (
    <div className='container-fluid  p-3'>
        <div className="row">
            <div className=" col-4 col-sm-4 col-md-2 col-lg-2 ">
               <Card bordered={true} loading={loading}>
               <Statistic value={totalCoins}  title="TotalCoins" valueStyle={{color: 'red'}} />
               </Card>
            </div>
            <div className=" col-4 col-sm-4 col-md-2 col-lg-2 ">
               <Card bordered={true} loading={loading}>
               <Statistic value={totalMarketCap} title="TotalMarketCap"  valueStyle={{color: 'green'}}/>
               </Card>
            </div>
            <div className=" col-4 col-sm-4 col-md-2 col-lg-2 ">
               <Card bordered={true} loading={loading}>
               <Statistic value={millify(total24hVolume)} title="Total24hVolume"  valueStyle={{color: 'green'}} />
               </Card>
            </div>
            <div className=" col-4 col-sm-4 col-md-2 col-lg-2 ">
               <Card bordered={true} loading={loading}>
               <Statistic value={totalMarkets}  title="TotalMarkets" valueStyle={{color: 'green'}}/ >
               </Card>
            </div>
            <div className=" col-4 col-sm-4 col-md-2 col-lg-2 ">
               <Card bordered={true} loading={loading}>
               <Statistic value={totalExchanges} valueStyle={{color: 'green'}}  title="TotalExchanges" />
               </Card>
            </div>
            <div className=" col-4 col-sm-4 col-md-2 col-lg-2 ">
               <Card bordered={true} loading={loading}>
               <Statistic value={total} valueStyle={{color: 'red'}}   title="Total"  />
               </Card>
            </div>
        </div>
      
    </div>
  )
}

export default GlobalcryptoStats