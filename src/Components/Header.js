import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="site-header">
      <nav>
        <div>
          <Link to="/">{t('navigation.homepage')}</Link>
          <Link to="/about">{t('navigation.about')}</Link>
        </div>

        <div>
          <button type="button" onClick={() => changeLanguage('en')}>
            <img src="united-kingdom.png" width="32" />
          </button>
          <button type="button" onClick={() => changeLanguage('tr')}>
            <img src="turkey.png" width="32" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
