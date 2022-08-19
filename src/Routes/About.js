import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about text-center">
      <h2 className="font-bold text-black-600 align">Project Description</h2>

      <article class="format flex items-start">
        <div>
          <p>
            {t('about.title')}
          </p>
          <ul>
            <li>{t('about.desc1')}</li>
            <li>{t('about.desc2')}</li>
            <li>{t('about.desc3')}</li>
            <li>{t('about.desc4')}</li>
            <li>{t('about.desc5')}</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
