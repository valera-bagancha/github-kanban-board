import { Info } from './components/Info'
import { Search } from './components/Search'

export const Header = () => {
  return (
    <header className="head">
      <Search />
      <Info />
    </header>
  )
}