import { useState } from "react";
import { useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// V4

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data)) 
  }, []);

	return (
		<section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
		</section>
	);
}


// V3
//
// const repository = {
// 	name: 'unform',
// 	description: 'Forms in React',
// 	link: 'https://github.com/unform/unform'
// }

// export function RepositoryList() {
//   const [repositories, setRepositories] = useState([]);

//   useEffect(() => {
//     fetch('https://api.github.com/orgs/rocketseat/repos')
//     .then(response => response.json())
//     .then(data => setRepositories(data)) 
//   }, []);

//   // console.log(repositories);

// 	return (
// 		<section className="repository-list">
//       <h1>Lista de Repositórios</h1>

//       <ul>
//         <RepositoryItem repository={repository} />
//         <RepositoryItem repository={repository} />
//         <RepositoryItem repository={repository} />
//         <RepositoryItem repository={repository} />
//       </ul>
// 		</section>
// 	);
// }



// V2

// export function RepositoryList() {
// 	return (
// 		<section className="repository-list">
// 				<h1>Lista de Repositórios</h1>

// 				<ul>
// 						<RepositoryItem repository="unform2" />
// 						<RepositoryItem />
// 						<RepositoryItem />
// 						<RepositoryItem />
// 				</ul>
// 		</section>
// 	);
// }



// V1
// 
// const repositoryName = 'unform2';
//
// export function RepositoryList() {
//     return (
//         <section className="repository-list">
//             <h1>Lista de Repositórios</h1>

//             <ul>
//                 <li>
//                    <strong>{repositoryName}</strong>
//                    <p>Forms in React</p>

//                    <a href="">
//                        Acessar Repositório
//                    </a>
//                 </li>
                
//                 <li>
//                    <strong>unform</strong>
//                    <p>Forms in React</p>

//                    <a href="">
//                        Acessar Repositório
//                    </a>
//                 </li>
                
//                 <li>
//                    <strong>unform</strong>
//                    <p>Forms in React</p>

//                    <a href="">
//                        Acessar Repositório
//                    </a>
//                 </li>
//             </ul>
//         </section>
//     );
// }