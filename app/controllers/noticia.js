module.exports.list = function(application, req, res){	

	console.log('Controller noticia. Operação list')
	var connection = application.config.dbConnection.connection;
	var noticiaDAO = application.app.models.noticia.noticiaDao;

	noticiaDAO.findById(connection, 
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
	cconsole.log('Controller noticia. Operação list')
	var connection = application.config.dbConnection.connection;
	var noticiaDAO = application.app.models.noticia.noticiaDao;

	noticiaDAO.findById(connection, 
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