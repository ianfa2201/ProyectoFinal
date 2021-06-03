
//---------slide 1--------
const fila = document.querySelector('.contenedorSlide');
const videos = document.querySelectorAll('.videos');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

//---flecha derecha---
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

//---- flecha izquierda----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

//  ----- Paginacion ---
const numeroPaginas = Math.ceil(videos.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

//  ----- Hover ----
videos.forEach((video) => {
	videos.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			videos.forEach(video => video.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	videos.forEach(video => video.classList.remove('hover'));
});

//---------slide 2--------
const fila2 = document.querySelector('.contenedorSlide2');
const videos2 = document.querySelectorAll('.videos2');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

//---flecha derecha2---
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo2.nextSibling){
		indicadorActivo2.nextSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}
});

//---- flecha izquierda2----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo2.previousSibling){
		indicadorActivo2.previousSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}
});

//  ----- Paginacion2 ---
const numeroPaginas2 = Math.ceil(videos2.length / 5);
for(let i = 0; i < numeroPaginas2; i++){
	const indicador2 = document.createElement('button');

	if(i === 0){
		indicador2.classList.add('activo');
	}

	document.querySelector('.indicadores2').appendChild(indicador2);
	indicador2.addEventListener('click', (e) => {
		fila2.scrollLeft = i * fila2.offsetWidth;

		document.querySelector('.indicadores2 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

//  ----- Hover 2----
videos2.forEach((video2) => {
	videos2.addEventListener('mouseenter2', (e) => {
		const elemento2 = e.currentTarget;
		setTimeout(() => {
			videos2.forEach(video => video2.classList.remove('hover'));
			elemento2.classList.add('hover');
		}, 300);
	});
});

fila2.addEventListener('mouseleave2', () => {
	videos2.forEach(video2 => video2.classList.remove('hover'));
});

