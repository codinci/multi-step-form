
export interface InfoData {
	[key: string]: {
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
	[key: string]: {
		type: string,
		for: string,
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
	[key: string]: {
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
	icons?: string[],
	data: InfoData | IplanData | IaddOnsData | []
}




