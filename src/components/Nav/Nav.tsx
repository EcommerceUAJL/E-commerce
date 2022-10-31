import Link from 'next/link';
import { NavContainer, NavOptions } from 'src/styles/NavStyles';

const Nav = () => {
  return (
    <NavContainer>
      <NavOptions>
        <h1>Your Store</h1>
        <input type="text" placeholder="search products..." />
        <Link href="/Login">Login</Link>
        <Link href="/SingUp">Sing Up</Link>
      </NavOptions>
      <NavOptions>
        <Link href="/categories">Categories</Link>
        <Link href="/offers">Offers</Link>
        <Link href="/popular">Popular</Link>
      </NavOptions>
    </NavContainer>
  );
};

export default Nav;
