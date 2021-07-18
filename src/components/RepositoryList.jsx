import { RepositoryItem } from "./RepositoryItem";

const repository = {
	name: 'unform',
	description: 'Forms in React',
	link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
	return (
		<section className="repository-list">
				<h1>Lista de Repositórios</h1>

				<ul>
						<RepositoryItem repository={repository} />
						<RepositoryItem repository={repository} />
						<RepositoryItem repository={repository} />
						<RepositoryItem repository={repository} />
				</ul>
		</section>
	);
}



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