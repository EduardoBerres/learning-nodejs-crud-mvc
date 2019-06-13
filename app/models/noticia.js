function NoticiaDao(){
}

NoticiaDao.prototype.findAll = function(connection, callback) {
	console.log('\tModel noticia. Operação findAll');		
	connection.query(
		"SELECT noticia_id, titulo, DATE_FORMAT(data,'%d/%m/%Y') as data, conteudo FROM noticia", 
		callback
		);
}

NoticiaDao.prototype.findById = function(connection, noticia_id, callback) {
	console.log('\tModel noticia. Operação findById');		
	/* TODO
	Implementar a funão findById
	*/
}

NoticiaDao.prototype.add = function(connection, noticia, callback) {
	console.log('\tModel noticia. Operação add');			
	/* TODO
	Implementar a funão add
	*/
}

NoticiaDao.prototype.edit = function(connection, noticia, callback) {
	console.log('\tModel noticia. Operação edit');			
	/* TODO
	Implementar a funão edit
	*/
}

NoticiaDao.prototype.delete = function(connection, noticia, callback) {
	console.log('\tModel noticia. Operação delete');			
	/* TODO
	Implementar a funão delete
	*/
}

module.exports.noticiaDao = new NoticiaDao()