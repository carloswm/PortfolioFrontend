import emoji from "react-easy-emoji";

export const greetings = {
	name: "Carlos Marigorda",
	title: "Hi all, I'm Carlos",
	description:
		"A passionate Frontend Developer having an experience of building Web applications with JavaScript / Reactjs  and some other cool libraries and frameworks.",
	resumeLink: "https://bit.ly/3K1s9S3",
};

export const openSource = {
	githubUserName: "carloswm",
};

export const contact = {};

export const socialLinks = {
	// facebook: "https://www.facebook.com/1hanzla100",
	instagram: "https://www.instagram.com/carlosmarigorda/",
	// twitter: "https://twitter.com/1hanzla100",
	github: "https://github.com/carloswm/",
	linkedin: "https://www.linkedin.com/in/carlos-marigorda-426684151/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		// emoji(
		// 	"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		// ),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		// {
		// 	skillName: "TypeScript",
		// 	fontAwesomeClassname: "logos:typescript-icon",
		// },
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		// {
		// 	skillName: "nodejs",
		// 	fontAwesomeClassname: "logos:nodejs-icon",
		// },
		// {
		// 	skillName: "flutter",
		// 	fontAwesomeClassname: "logos:flutter",
		// },
		// {
		// 	skillName: "swift",
		// 	fontAwesomeClassname: "vscode-icons:file-type-swift",
		// },
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		// {
		// 	skillName: "aws",
		// 	fontAwesomeClassname: "logos:aws",
		// },
		// {
		// 	skillName: "firebase",
		// 	fontAwesomeClassname: "logos:firebase",
		// },
		// {
		// 	skillName: "python",
		// 	fontAwesomeClassname: "logos:python",
		// },
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		// {
		// 	skillName: "docker",
		// 	fontAwesomeClassname: "logos:docker-icon",
		// },
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Cibertec Institute",
		subHeader: "Computing and Computer Science",
		duration: "September 2018 - present",
		desc: "Contribute to the quality assurance of computer solutions considering current criteria and standards in my development.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		schoolName: "Udemy Course",
		subHeader: "React: De cero a experto ( Hooks y MERN )",
		duration: "July 2021 - December 2021",
		desc: "Development of web pages in react from the most basic to deeper concepts such as global state management.",
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	}
];

export const experience = [
	{
		role: "Frontend Developer",
		company: "Reevolution Company",
		companylogo: "/img/icons/common/magento-logo.png",
		date: "Febrery 2018 – Present",
		desc: "Responsible for the development of web pages based on the Magento 2 ecommerce platform. Within which I have handled technologies such as:",
		descBullets: [
			"KnockoutJs",
			"XML",
			"Javascript",
			"Sass",
			"PHP"
		],
	},
	// {
	// 	role: "Front-End Developer",
	// 	company: "Github",
	// 	companylogo: "/img/icons/common/github.svg",
	// 	date: "May 2017 – May 2018",
	// 	desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// },
	// {
	// 	role: "Software Engineer Intern",
	// 	company: "Airbnb",
	// 	companylogo: "/img/icons/common/airbnbLogo.png",
	// 	date: "Jan 2015 – Sep 2015",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// },
];

export const projects = [
	{
		name: "STARPHY",
		desc: "Video game store built on React and consuming an external API that allows displaying different categories of video games across the platform.",
		link: "https://usuarios-b78e1.web.app/",
		github: "https://github.com/carloswm/Starphy-Games"
	},
	{
		name: "DREADFUL",
		desc: "Platform that showcases a variety of anime, built with React, consuming an external API, Styled Components, and React Router.",
		github: "https://github.com/carloswm/Dreadful",
	},
	{
		name: "POKEAPI",
		desc: "Pokemon finder consuming an API, allows you to see relevant statistics.",
		github: "https://github.com/carloswm/pokeApi",
	},
	{
		name: "WEATHER APP",
		desc: "weather application, which allows you to select a city and shows you the weather data.",
		github: "https://github.com/carloswm/weather_App",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
