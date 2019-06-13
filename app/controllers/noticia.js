module.exports.list = function(application, req, res){	

	console.log('Controller noticia. Operação list')
	var connection = application.config.dbConnection.connection;
	var noticiaDAO = application.app.models.noticia.noticiaDao;

	/* O método findAll em noticiaDao necessita de uma função de callback.
	Essa função diz o que findAll tem que fazer ao termina a sua ação de 
	procurar as notícias no banco.
	*/
	noticiaDAO.findAll(connection, 
		/* Esta é a nossa função de callback */
		function(error, result){
			header = {
				'noticia_id'	: '#', 
				'titulo' 		: 'Título',
				'data' 			: 'Data',
				'conteudo' 		: 'Conteúdo'
			};
			operations = {
				'field'		: 'noticia_id',
				'model'		: 'noticia',
				'names'		: {
					'show'		: 'Show',
					'edit'		: 'Edit',
					'delete' 	: 'Delete'					
				}
			};				
			res.json( { header : header, data : result, operations : operations } );			
		}
	)
}


module.exports.getById = function(application, req, res){
	console.log('Controller noticia. Operação getById')
	/* TODO
	Implementar operação getById
	*/		
}


module.exports.add = function(application, req, res){	
	console.log('Controller noticia. Operação add')
	/* TODO
	Implementar operação add
	*/
}

module.exports.edit = function(application, req, res){	
	console.log('Controller noticia. Operação edit')
	/* TODO
	Implementar operação edit
	*/
}

module.exports.delete = function(application, req, res){
	console.log('Controller noticia. Operação delete')
	/* TODO
	Implementar operação delete
	*/
}