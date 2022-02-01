import React, {useState, useCallback, useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

import Logo from '../../presale/component/logo';
import NotfoundModal from '../../presale/component/modal/NotFoundModal';
import WhiteListBodyRight from './WhiteListBody__right';

export default function WhiteListBody(props) {
  const {changeStateWarning} = props;
  const [notfound, setNotfound] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const showModalNotFound = useCallback(() => {
    setNotfound(true);
  });

  useEffect(() => {
    const id = searchParams.get('a');
    if (id !== null && id !== undefined) {
      const storage = window.localStorage;
      storage.setItem('id', id);
    }
  }, []);

  return (
    <div className="white-list__body">
      {!notfound ? (
        <>
          <Logo />
          <WhiteListBodyRight showModalNotFound={showModalNotFound} />
        </>
      ) : (
        <NotfoundModal />
      )}
    </div>
  );
}