import React from 'react'
import { IResult } from '../../types';
import t from '../../translations';
import styles from './Result.module.scss';

const Result: React.FC<IResult> = ({
  consumerPrice,
  overpayRatio,
  tip,
  totalPrice,
}) => {
  const overpayPercent = Math.round((overpayRatio - 1) * 100);

  return (
    <div className={styles.root}>
      <div>
        <h2 className={styles.total}>{`${t.totalPrice}: ${totalPrice}`}</h2>
        <p>{t.tip}: {tip} {`(+ ${overpayPercent} %)`}</p>
      </div>

      <div className={styles.consumer}>
        <h3>{consumerPrice}</h3>
        <p>{t.consumerPrice}</p>
      </div>
    </div>
  )
}

export default Result
