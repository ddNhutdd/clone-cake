import HeaderComponent from 'src/components/header-component';
import css from './info.module.scss';
import HeaderComponentList4 from 'src/constants/header-component-list-4';
import InfoTop from './info-top';
import Warning from 'src/components/warning';
import Card from 'src/components/card';


function Info() {

  return (
    <div className={css.info}>
      <HeaderComponent list={HeaderComponentList4} />
      <InfoTop />
      <div className={css.container}>
        <Warning />

        <div className={css.info__chart}>
          <div className={css['info--title']}>
            PancakeSwap Info & Analytics
          </div>
          <div className={css.info__chart__item}>
            <Card>
              <div className={css.info__chart__name}>
                Liquidity
              </div>
              <div className={css.info__chart__money}>
                $ 1.51B
              </div>
              <div className={css.info__chart__time}>
                May 9, 2024
              </div>
              <div>
              </div>
            </Card>
          </div>
          <div className={css.info__chart__item}>
            <Card>
              <div className={css.info__chart__name}>
                Volume 24H
              </div>
              <div className={css.info__chart__money}>
                $ 246.75M
              </div>
              <div className={css.info__chart__time}>
                May 9, 2024
              </div>
            </Card>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Info