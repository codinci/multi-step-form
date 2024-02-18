import { IaddOnsData, InfoData, IplanData, IstepItems } from "../interfaces/FormDataInterfaces";

const INFO: InfoData = {
	label: ['Name', 'Email', 'Phone Number'],
	type: ['text', 'email', 'text'],
	validations: {},
	errors: {},
	placeholder: ['e.g Stephen King', 'e.g. stephenking@lorem.com', 'e.g. +1 234 567 890']
};



const PLAN: IplanData = {
	type: 'radio',
	label: ['Arcade', 'Advanced', 'Pro'],
	monthly: ['$9/mo', '$12/mo', '$15/mo'],
	yearly: ['$90/yr', '$120/yr', '$150/yr']
};

const ADDONS: IaddOnsData = {
	type: 'checkbox',
	label: ['Online Service', 'Larger storage', 'Customizable profile'],
	message: ['Access to multiplayer games', 'Extra 1TB of cloud save', 'Custom theme on your profile'],
	monthly: ['+$1/mo', '+$2/mo'],
	yearly: ['+$10/yr', '+$20/yr']
};

const planIcons: string[] = [
	'../../assets/images/icon-arcade.svg',
	'../../assets/images/icon-advanced.svg',
	'../../assets/images/icon-pro.svg'
]

export const FormData: IstepItems[] = [
  { title: 'Personal info', subtitle: 'Please provide your name, email address, and phone number.', data: INFO },
  { title: 'Select your plan', subtitle: 'You have the option of monthly or yearly billing.', icons: planIcons, data: PLAN },
  { title: 'Pick add-ons', subtitle: 'Add-ons help enhance your gaming experience.', data: ADDONS },
  { title: 'Finishing up', subtitle: 'Double-check everything looks OK before confirming.', data: [] }
];