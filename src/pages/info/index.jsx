import HeaderComponent from 'src/components/header-component';
import css from './info.module.scss';
import HeaderComponentList4 from 'src/constants/header-component-list-4';
import InfoTop from './info-top';

function Info() {
  return (
    <div className={css.info}>
      <HeaderComponent list={HeaderComponentList4} />
      <InfoTop />
    </div>
  )
}

export default Info