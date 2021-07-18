export function RepositoryItem(props) {
	return (
		<li>
				<strong>{props.repository.name ?? 'Default'}</strong>
				<p>{props.repository.description}</p>

				<a href={props.repository.link}>
						Acessar Repositório
				</a>
		</li>
	);
}



// V1

// export function RepositoryItem(props) {
// 	return (
// 		<li>
// 				<strong>{props.repository?.name ?? 'Default'}</strong>
// 				<p>Forms in React</p>

// 				<a href="">
// 						Acessar Repositório
// 				</a>
// 		</li>
// 	);
// }