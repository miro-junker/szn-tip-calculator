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
    <div>
      <div>
        <h2 className={styles.total}>
          {`${t.totalPrice}: `}
          <span className={styles.price}>{totalPrice}</span>
        </h2>
        <p>
          {`${t.tip}: `}
          <span className={styles.price}>{tip}</span>
          <span className={styles.overpay}>
            {` (+ ${overpayPercent} %)`}
          </span>
        </p>
      </div>

      <div className={styles.consumer}>
        <h3 className={styles.price}>{consumerPrice}</h3>
        <p>{t.consumerPrice}</p>
      </div>
    </div>
  )
}

export default Result
