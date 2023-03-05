import React from 'react';
import ExperienceCard from '../../components/ExperienceCard';

const ExpTab = () => {
	return (
		<div className={'profile-content__column'}>
			<ExperienceCard
				title={'Frontend Software Engineer'}
				companyLink={'https://rapidsos.com/'}
				company={'RapidSOS'}
				timeEmployed={'(Apr 2020 - Present)'}
				summary={'An intelligent emergency response data platform'}
				tasks={[
					'Designed and developed reusable components for Google and ESRI maps that effectively pinpointed locations using diverse variables such as caller location, alerts, Ani/Ali, and what3words.',
					'Integrated with third-party APIs to generate dynamic layers on top of Google and ESRI maps, elevating their functionality and enhancing the overall user experience.',
					'Collaborated with cross-functional teams to create and implement new services and demos with a focus on deployment, availability, and scalability.',
					'Increased engagement with ECCs from 26% to 60% by building dynamic components with WebAPIs, laying the groundwork for future partnerships.',
					'Integrated and reverse geocoded third-party systems to ensure the accurate geographic location data of mobile, Ani/Ali, and vehicle information.',
					'Utilized Storybook to isolate, mock, document, and test components to optimize productivity and efficiency.',
					'Maintained and improved the architecture of cloud services to guarantee high system availability.',
					'Streamlined and consolidated monitoring tools, reducing redundancy by over 40% and speeding up the root cause identification process, resulting in increased collaboration within a shorter turnaround time.',
				]}
			/>
			<ExperienceCard
				title={'Frontend Software Engineer'}
				companyLink={'https://www.learningeconomy.io/'}
				company={'Learning Economy'}
				timeEmployed={'(Aug 2019 - Apr 2020)'}
				summary={'A Steward of the Internet of Education'}
				tasks={[
					'Collaborated with the design team to create mockups, prototypes, and final builds using Webflow for both internal sites and clients.',
					'Worked closely with the CTO to standardize the front-end design system and infrastructure.',
					'Developed mobile-first interactive UI and reusable components with React while ensuring consistency with the brand guidelines and design standards.',
					'Successfully converted legacy JavaScript and HTML layout into a modern React structure, optimizing performance and maintainability.',
				]}
			/>
		</div>
	);
};

export default ExpTab;
