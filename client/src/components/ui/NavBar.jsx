/* eslint-disable react/prop-types */
import { Menu, MenuItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NavBar({ logoutHandler, user, handleItemClick, activeItem }) {
  return (
    <Menu pointing>
      <Menu.Item header>
        <img
          src="/logo.svg" // Укажите путь к вашему логотипу
          style={{ height: '40px', marginRight: '10px' }} // Установите нужные стили
        />
        SKI
      </Menu.Item>

      <MenuItem
        as={Link}
        to="/home"
        name="Home"
        active={activeItem === 'Home'}
        onClick={() => handleItemClick('Home')}
      />

      <Menu.Menu position="right">
        {!user.data && (
          <>
            <MenuItem
              as={Link}
              to="/signin"
              name="Вход"
              active={activeItem === 'Вход'}
              onClick={() => handleItemClick('Вход')}
            />
            <MenuItem
              as={Link}
              to="/signup"
              name="Регистрация"
              active={activeItem === 'Регистрация'}
              onClick={() => handleItemClick('Регистрация')}
            />
          </>
        )}
        {user?.data?.name === 'admin' && (
          <>
            <MenuItem
              as={Link}
              to="/redaction"
              name="Редактировать трассу"
              active={activeItem === 'Редактировать трассу'}
              onClick={() => handleItemClick('Редактировать трассу')}
            />
            <MenuItem
              as={Link}
              to="/addTrassa"
              name="Добавить трассу"
              active={activeItem === 'Добавить трассу'}
              onClick={() => handleItemClick('Добавить трассу')}
            />
          </>
        )}
        {user.data && (
          <>
            <MenuItem name={user.data.name} />
            <MenuItem name="Выход" onClick={logoutHandler} />
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
}
