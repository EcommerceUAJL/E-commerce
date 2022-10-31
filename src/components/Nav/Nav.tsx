import Link from 'next/link';
import { NavContainer, NavOptions, SearchBar } from 'src/styles/NavStyles';

const Nav = () => {
  return (
    <NavContainer>
      <NavOptions>
        <h1>Your Store</h1>
        <SearchBar type="text" placeholder="Search products . . ." />
        <Link href="/Login">Login</Link>
        <Link href="/SingUp">Sing Up</Link>
      </NavOptions>
      <div style={{ width: '250px', margin: 'auto' }}>
        <NavOptions>
          <Link href="/categories">Categories</Link>
          <Link href="/offers">Offers</Link>
          <Link href="/popular">Popular</Link>
        </NavOptions>
      </div>
    </NavContainer>
  );
};

export default Nav;
