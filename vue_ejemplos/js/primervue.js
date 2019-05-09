const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Hola Vue pero con Jane :3',
		frutas: ['Manzana', 'Uva', 'Peras', 'Fresas'],
		frutas2: [
			{nombre: 'Manzana', cantidad: 11},
			{nombre: 'Uva', cantidad: 0},
			{nombre: 'Peras', cantidad: 80},
			{nombre: 'Fresas', cantidad: 201},
		],
		nuevaFruta: '',
		total: 0
	},
	methods: {
		agregarFruta(){
			//console.log("Diste clic Men!");
			if(this.nuevaFruta != '')
			{
				this.frutas.push(this.nuevaFruta);
				this.frutas2.push({
					nombre: this.nuevaFruta,
					cantidad: 0
				});
				this.nuevaFruta = '';
			}
		}
	},
	computed: {
		sumarFrutas(){
			this.total = 0;
			for(fruta of this.frutas2){
				if(fruta.cantidad != 0)
				{
					this.total = this.total + fruta.cantidad;
				}
			}
			return this.total;
		}
	}
});