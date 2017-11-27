export default StiVue.app({

	props: ['name'],

	template: '<button v-on:click="increment">{{ counter }}</button>',

	data (){
		return {
			counter: 0
		}
	},

	methods: {
		increment (){
			this.counter += 1
			this.$emit('increment')
		}
	}

})