import { IaddOnsData, InfoData, IplanData, IstepItems } from "../interfaces/FormDataInterfaces";

const INFO: InfoData = {
	'Name': {
		for: 'name',
		type: 'text',
		validations: {
			required: true,
			minLength: 3,
		},
		errors: {
			required: 'Please enter your name',
			minLength: 'Minimum length should be four characters'
		},
		placeholder: 'e.g Stephen King',
	},
	'Email': {
		for: 'email',
		type: 'email',
		validations: {
			required: true,
			pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
		},
		errors: {
			required: 'Please enter your email address',
			pattern: 'Please enter a valid email address'
		},
		placeholder: 'e.g. stephenking@lorem.com',

	},
	'Phone Number': {
		for: 'phoneNo',
		type: 'tel',
		validations: {
			required: true,
			pattern: /^\d{10}$/
		},
		errors: {
			required: 'Please enter your phone number',
			pattern: 'Please enter a valid phone number'
		},
		placeholder: 'e.g. +1 234 567 890',
	},

};



const PLAN: IplanData = {
	'Arcade': {
		type: 'radio',
		for: 'arcade',
		icon: '../../assets/images/icon-arcade.svg',
		name: 'plan_subscription',
		monthly: {
			value: 9,
			text: '$9/mo',
		},
		yearly: {
			value: 90,
			text: '$90/yr',
		}
	},
	'Advanced': {
		type: 'radio',
		for: 'advanced',
		icon: '../../assets/images/icon-advanced.svg',
		name: 'plan_subscription',
		monthly: {
			value: 12,
			text: '$12/mo',
		},
		yearly: {
			value: 120,
			text: '$120/yr',
		}
	},
	'Pro': {
		type: 'radio',
		for: 'pro',
		icon: '../../assets/images/icon-pro.svg',
		name: 'plan_subscription',
		monthly: {
			value: 15,
			text: '$15/mo',
		},
		yearly: {
			value: 150,
			text: '$150/yr',
		}
	},

};

const ADDONS: IaddOnsData = {
	'Online Service': {
		type: 'checkbox',
		for: 'online_service',
		message: 'Access to multiplayer games',
		monthly: {
			value: 1,
			text: '+$1/mo'
		},
		yearly: {
			value: 10,
			text: '+$10/yr'
		}
	},
	'Larger storage': {
		type: 'checkbox',
		for: 'larger_storage',
		message: 'Extra 1TB of cloud save',
		monthly: {
			value: 2,
			text: '+$2/mo'
		},
		yearly: {
			value: 20,
			text: '+$20/yr'
		}
	},
	'Customizable profile': {
		type: 'checkbox',
		for: 'customizable_profile',
		message: 'Custom theme on your profile',
		monthly: {
			value: 2,
			text: '+$2/mo'
		},
		yearly: {
			value: 20,
			text: '+$20/yr'
		}
	},
};



export const FormData: IstepItems[] = [
  { title: 'Personal info', subtitle: 'Please provide your name, email address, and phone number.', data: INFO },
  { title: 'Select your plan', subtitle: 'You have the option of monthly or yearly billing.', data: PLAN },
  { title: 'Pick add-ons', subtitle: 'Add-ons help enhance your gaming experience.', data: ADDONS },
  { title: 'Finishing up', subtitle: 'Double-check everything looks OK before confirming.', data: [] }
];