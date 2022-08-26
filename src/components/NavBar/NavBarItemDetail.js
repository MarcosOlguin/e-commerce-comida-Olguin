import { useEffect, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import WindowModal from "../WindowModal/WindowModal";
import "./NavBarItemDetail.css";
import "../../../node_modules/hamburgers/_sass/hamburgers/hamburgers.scss";

function NavBarItemDetail() {
  const [scrollUp, setScrollUp] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  let lasScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lasScroll) setScrollUp(false);
      else setScrollUp(true);

      lasScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsActive(true);
    isOpen ? closeModal() : openModal();
  };
  const handleClickDesactive = () => setIsActive(false);

  console.log(isActive);
  return (
    <>
      <WindowModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleClickDesactive={handleClickDesactive}
      />

      <div className={`header ${scrollUp}`}>
        <header className={`trigger-menu-wrapper `}>
          <div>
            <button
              style={{
                zIndex: 54,
                paddingLeft: "30%",
                paddingBottom: 0,
                color: "#ffff",
              }}
              onClick={handleClick}
              className={`hamburger hamburger--collapse ${
                isActive && "is-active"
              } equis`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <span className="menu">Menú</span>
          </div>
          <div>
            <h1>The Oak</h1>
            <span>Furniture Shop</span>
          </div>
          <div>
            <input type="text" placeholder="Search" className="search" />
          </div>
          <div></div>
          <div>
            <CartWidget />
          </div>
        </header>
      </div>
    </>
  );
}

export default NavBarItemDetail;
