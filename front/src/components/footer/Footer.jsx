import React from 'react';

import './styles/footer.css';

const Footer = () => {
  const userI = null;
  return (
    <footer className='footer'>

    <div className="footer__wrapper">

      {/* <div className="footer__wrapper-part">
        <h3 className="footer__contact-title">Наш адрес:</h3>
        <ul className="footer__contacts-list">
          <li>Тел.:  8888888888</li>
          <li>Email: ABRACADABRA@mail.ru</li>
          <li>Адрес: г. Москва, ул. Большая Полянка, д. 7/10&nbsp;с.&nbsp;1</li>
        </ul>
      </div> */}

      <div className="footer__wrapper-part">
        <script
          type="text/javascript"
          charset="utf-8"
          defer
          src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6c14009289b1fbdaf10333347eb9e1e87028e0df44acec20938c7c7784c83c17&amp;width=100%&amp;height=374&amp;lang=ru_RU&amp;scroll=true">
        </script>
      </div>

    </div>

    <p className="footer__copyright">&copy; &laquo;Все права защищены&raquo;. ООО &laquo;Школа иностранных языков Китти-Кейт&raquo;.</p>
    </footer>
  );
};

export default Footer;
