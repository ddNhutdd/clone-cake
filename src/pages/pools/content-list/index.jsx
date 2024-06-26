import Card from 'src/components/card';
import css from './content-list.module.scss';
import FirstRow from './first-row';
import Row from './row';

function ContentList() {
  return (
    <>
      <div className={css.contentList}>
        <div className={css.container}>
          <Card>
            <div className={css.contentList__content}>
              <FirstRow />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row borderBottom={false} />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ContentList;