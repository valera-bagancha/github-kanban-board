import { useSelector } from 'react-redux'

import { Info } from './components/Info'
import { Search } from './components/Search'
import { loaderSelector } from '../../redux/issuesInfo/selectors'


export const Header = () => {
  const loader = useSelector(loaderSelector)

  return (
    <header className="head">
      <Search />
      {!loader && <Info />}
    </header>
  )
}