import Botao from "./Botao";

function App(){

	const botao = [
		{
			palavra: "Entregador",
		},
		{
			palavra: "Restaurante e Mercado",
		},
    {
			palavra: "Carreiras",
		},
    {
			palavra: "iFood Card", 
		}
	];

	return(

		<div className="cont"> 
			{
			botao.map((cons, cont) => {
					return <Botao key={cont}
							palavra={cons.palavra}
							
						/>;
				})
			}
	  </div>
	);
}

export default App;