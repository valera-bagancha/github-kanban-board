import { Info } from './components/Info'
import { Search } from './components/Search'

export const Header = () => {
  return (
    <div className="head">
      <Search />
      <Info />
    </div>
  )
}