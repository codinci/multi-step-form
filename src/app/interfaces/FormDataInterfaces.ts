
export interface InfoData {
	Name: {
		for: string,
		type: string,
		validations: {
			required: boolean,
			pattern?: RegExp,
			minLength?: number,

		},
		errors: {
			required: string,
			pattern?: string,
			minLength?: string,
		},
		placeholder: string,
	},
	Email: {
		for: string,
		type: string,
		validations: {
			required: boolean,
			pattern?: RegExp,
			minLength?: number,

		},
		errors: {
			required: string,
			pattern?: string,
			minLength?: string,
		},
		placeholder: string,
	},
	'Phone Number': {
		for: string,
		type: string,
		validations: {
			required: boolean,
			pattern?: RegExp,
			minLength?: number,

		},
		errors: {
			required: string,
			pattern?: string,
			minLength?: string,
		},
		placeholder: string,
	}
}


export interface IplanData {
	Arcade: {
		type: string,
		for: string,
		icon: string,
		name: string,
		monthly: {
			value: number,
			text: string,
		},
		yearly: {
			value: number,
			text: string,
		}
	},
	Advanced: {
		type: string,
		for: string,
		icon: string,
		name: string,
		monthly: {
			value: number,
			text: string,
		},
		yearly: {
			value: number,
			text: string,
		}
	},
	Pro: {
		type: string,
		for: string,
		icon: string,
		name: string,
		monthly: {
			value: number,
			text: string,
		},
		yearly: {
			value: number,
			text: string,
		}
	}
}



export interface IaddOnsData {
	'Online Service': {
		type: string,
		for: string,
		message: string,
		monthly: {
			value: number,
			text: string,
		},
		yearly: {
			value: number,
			text: string,
		}
	},
	'Larger storage': {
		type: string,
		for: string,
		message: string,
		monthly: {
			value: number,
			text: string,
		},
		yearly: {
			value: number,
			text: string,
		}
	},
	'Customizable profile': {
		type: string,
		for: string,
		message: string,
		monthly: {
			value: number,
			text: string,
		},
		yearly: {
			value: number,
			text: string,
		}
	}
}

export interface IstepItems {
	title: string,
	subtitle: string,
	data: InfoData | IplanData | IaddOnsData | []
}




