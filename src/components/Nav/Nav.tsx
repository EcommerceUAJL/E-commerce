import Link from 'next/link';
import {
  NavContainer,
  NavOptions,
  SearchBar,
  SearchButton,
} from 'src/styles/NavStyles';
import Image from 'next/image';
import search from '../../assets/searchBar/search.png';
import { CenterContainer, Separator } from 'src/styles/AdjustStyles';

let user = [];
// user = ['o'];

const Nav = () => {
  return (
    <NavContainer>
      <NavOptions>
        <h1 style={{ margin: 0 }}>Your Store</h1>

        <CenterContainer
          style={{
            height: '35px',
            backgroundColor: 'white',
          }}
        >
          <SearchBar type="text" placeholder="Search products . . ." />
          <Separator />
          <SearchButton>
            <Image src={search} alt="search" />
          </SearchButton>
        </CenterContainer>
        {user.length > 0 ? (
          <div></div>
        ) : (
          <div
            style={{
              margin: 0,
              display: 'flex',
              width: '150px',
              justifyContent: 'space-between',
            }}
          >
            <Link href="/Login">Login</Link>
            <Link href="/SingUp">Sing Up</Link>
          </div>
        )}
      </NavOptions>
      <div>
        {user.length > 0 ? (
          <NavOptions style={{ width: '440px', margin: 'auto' }}>
            <Link href="/categories">Categories</Link>
            <Link href="/offers">Offers</Link>
            <Link href="/popular">Popular</Link>
            <Link href="/recommended">Recommended</Link>
            <Link href="/favorites">Favorites</Link>
          </NavOptions>
        ) : (
          <NavOptions
            style={{
              width: '250px',
              margin: 'auto',
            }}
          >
            <Link href="/categories">Categories</Link>
            <Link href="/offers">Offers</Link>
            <Link href="/popular">Popular</Link>
          </NavOptions>
        )}
      </div>
    </NavContainer>
  );
};

export default Nav;
