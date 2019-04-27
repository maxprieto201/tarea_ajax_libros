let plantilla = $(".row").html();

$(".row").html("");

$.get(" https://3a8i3.github.io/libros/", function( datos ){
	mostrardatos( datos );
});
function mostrardatos( d ){

	for (let i = 0; i < d.length; i++) {
		let plantJQ = $(plantilla);

		plantJQ.find(".titulo").text(d[i].titulo);
		plantJQ.find(".anho").text(d[i].anho);
		plantJQ.find(".editorial").text(d[i].editorial);
		plantJQ.find(".resumen").text(d[i].resumen);
		plantJQ.find(".tema").text(d[i].temas);
		plantJQ.find(".bio_autor").text(d[i].biografia);
		
		plantJQ.find(".nombre_autor").text(d[i].autor.nombre);
		plantJQ.find(".fecha_autor").text(d[i].autor.nacimiento.fecha);
		plantJQ.find(".ciudad_autor").text(d[i].autor.nacimiento.ciudad);
		plantJQ.find(".pais_autor").text(d[i].autor.nacimiento.pais);
		plantJQ.find(".bio_autor").text(d[i].autor.biografia);

		plantJQ.find(".portada").attr("src",d[i].portada);
		plantJQ.find(".foto").attr("src",d[i].autor.foto);
		


		$(".row").append(plantJQ);
	}
}