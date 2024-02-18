export interface InfoData {
	label: string[];
	type: string[];
	validations: any;
	errors: any;
	placeholder: string[];
}


export interface IplanData {
	type: string,
	label: string[],
	monthly: string[],
	yearly: string[]
}



export interface IaddOnsData {
	type: string,
	label: string[],
	message: string[],
	monthly: string[],
	yearly: string[]
}

export interface IstepItems {
	title: string,
	subtitle: string,
	icons?: string[],
	data: InfoData | IplanData | IaddOnsData | []
}




