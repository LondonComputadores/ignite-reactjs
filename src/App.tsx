import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';


// V3
//
export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}



// V2
// export function App() {
//     return <RepositoryList />
// }


// V1
//
// export function App() {
//     return <h1>Heya Devs Again 212!</h1>
// }