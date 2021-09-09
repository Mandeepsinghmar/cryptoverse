import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import millify from 'millify';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { Cryptos } from '../cryptos/Cryptos';

import { getAllCryptos, useCryptoListSelector } from '../cryptos/cryptosSlice';

import './home.css';
import { getAllCryptosNews, useCryptoNewsListSelector } from '../news/newsSlice';

export const Home = () => {
  const { cryptosList } = useCryptoListSelector();
  const { cryptoNews } = useCryptoNewsListSelector();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCryptos({ number: 10 }));
    dispatch(getAllCryptosNews({ newsCategory: 'cryptocurrency', count: 6 }));
  }, []);

  return (
    <div className="home-container">

      <div>
        <h2 className="home-heading">Global Crypto Stats</h2>

      </div>
      <div className="global-stats-container">
        {
        cryptosList?.stats && (

        <div className="global-stats-card-container">

          <div className="global-stats-card">
            <p className="global-stats-name">Total Cryptocurrencies</p>
            <p>{cryptosList.stats.total}</p>
          </div>
          <div className="global-stats-card">
            <p className="global-stats-name">Total Markets</p>
            <p>{cryptosList.stats.totalMarkets}</p>
          </div>
          <div className="global-stats-card">
            <p className="global-stats-name">Total Exchanges</p>
            <p>{cryptosList.stats.totalExchanges}</p>
          </div>
          <div className="global-stats-card">
            <p className="global-stats-name">Total Market Cap</p>
            <p>{cryptosList.stats.totalMarketCap && millify(cryptosList.stats.totalMarketCap)}</p>
          </div>
          <div className="global-stats-card">
            <p className="global-stats-name">Total 24h Volume</p>
            <p>{cryptosList.stats.total24hVolume && millify(cryptosList.stats.total24hVolume)}</p>
          </div>
        </div>
        )
      }
      </div>

      <div>
        <div className="heading-container">
          <h2 className="home-heading">Top 10 Cryptos in the world</h2>
          <p>
            <Link className="show-more" to="/cryptos">Show more</Link>

          </p>
        </div>

      </div>
      <div className="home-cryptos-list">
        <Cryptos data={cryptosList?.coins} />

      </div>
      <div className="heading-container">
        <h2 className="home-heading">Latest crypto news</h2>
        <p>
          <Link className="show-more" to="/news">Show more</Link>

        </p>
      </div>
      <div className="home-crypto-news">
        <div className="news-container">
          {
         cryptoNews?.value ? (
           cryptoNews.value.map((news) => (
             <div key={uuid()}>
               <a href={news.url} target="_blank" className="news-card" rel="noreferrer">
                 <img
                   src={news?.image?.thumbnail?.contentUrl
                || 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3eeb15d1-a70f-45cd-a02a-f4a21bf36674.png?fit=scale-down&source=next&width=700'}
                   alt=""
                 />
                 <div className="provider-info">
                   <img
                     src={news.provider[0]?.image?.thumbnail?.contentUrl
                  || 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3eeb15d1-a70f-45cd-a02a-f4a21bf36674.png?fit=scale-down&source=next&width=700'}
                     alt=""
                   />

                   <p className="provider-name">{news.provider[0]?.name}</p>
                   <p>{
                   moment(news.datePublished)
                     .startOf('ss')
                     .fromNow()
}
                   </p>
                 </div>
                 <h4>{news.name}</h4>

               </a>
             </div>

           ))
         ) : (
           <div>
             loading...
           </div>
         )
       }
        </div>
      </div>
    </div>
  );
};
