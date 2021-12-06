function Header({ userAddress, isMetamaskDefined }) {
  return (
    <header>
      {isMetamaskDefined ? userAddress : "Install Metamask First TODO: LINK"}
    </header>
  );
}

export default Header;
