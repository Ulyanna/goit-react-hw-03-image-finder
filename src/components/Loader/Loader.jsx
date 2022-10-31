import { Bars } from 'react-loader-spinner'
import css from "../Loader/Loader.module.css"
import React from 'react';

export const Loader = () => {
    return (<div className={css.loaderWrapper}><Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/></div>)
}