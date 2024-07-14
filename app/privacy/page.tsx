import Link from 'next/link'
import Image from 'next/image'
import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Watpad - Privacy Policy',
	description: 'Watpad is a free and open-source stopwatch app that runs entirely on client side. We do not collect ' +
		'any personal information from the users. Read our privacy policy to know more.',
	keywords: [
		'watpad', 'privacy policy', 'watpad privacy policy', 'watpad terms of service', 'watpad terms', 'watpad policy',
		'wat practice app', 'word association test', 'ssb practice', 'privacy guidelines', 'data collection'
	]
}

const PrivacyPage = () => {
	return (
		<main className="flex flex-col items-start justify-center gap-8 min-h-lvh w-full mx-auto max-w-[600px] px-8 py-16">
			<header className="flex justify-between items-center w-full">
				<Link href="/">
					<Image src="/logo.svg" alt="Watpad logo" width={180} height={38} className="w-24"/>
				</Link>
			</header>

			<div className="prose lg:prose-xl prose-neutral prose-invert">
				<h1 id="privacy-policy">Privacy Policy</h1>
				<p><strong>Effective Date:</strong> July 14, 2024</p>
				<h2 id="1-introduction">1. Introduction</h2>
				<p>
					Welcome to Watpad. We are committed to protecting your privacy. This Privacy Policy explains how
					Watpad (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) collects, uses, discloses, and safeguards
					your information when you use our application.
				</p>
				<h2 id="2-company-information">2. Company Information</h2>
				<ul>
					<li><strong>Company Name:</strong> Watpad</li>
					<li><strong>Address:</strong> Kalyani, Nadia, West Bengal, India 741235</li>
					<li><strong>Contact Email:</strong> <a
						href="mailto:subha60kundu@gmail.com">subha60kundu@gmail.com</a></li>
				</ul>
				<h2 id="3-data-collection">3. Data Collection</h2>
				<p>
					Watpad runs entirely on client side, that means we don't collect any sort of sensitive data
					whatsoever. You don't have to login or provide any personal information to use the app. When you
					use the upload feature, the data is stored in your browser's local storage and is not sent to any
					server. The data is only stored in your browser and is not accessible to anyone else.
				</p>

				<p>
					Although when using the AI chat feature, the data is sent to the server for processing. The data is
					only used to provide the chat functionality and is not stored in the server. The data is not shared
					with any third party and we can't access the data from our end.
				</p>

				<p>
					Apart from these, we collect a few anonymous usage statistics to improve the app. The data we
					collect are as follows:
				</p>
				<ul>
					<li>How many PPTs processed and how many slides were there</li>
					<li>How many words were displayed</li>
					<li>How many words were skipped, and which words were skipped</li>
					<li>How many times the user used the chat feature</li>
				</ul>
				<h2 id="4-data-usage">4. Data Usage</h2>
				<p>The data collected is used to:</p>
				<ul>
					<li>Improve the application to better serve the user</li>
					<li>Provide better feedback through the AI</li>
				</ul>
				<p>We do not share your data with any third parties, except as required to comply with legal
					obligations.</p>
				<h2 id="5-data-storage-and-security">5. Data Storage and Security</h2>
				<p>The collected data is stored in our database that is hosted in the
					Mumbai, India AWS data center. We implement a variety of security measures to maintain the safety of
					your personal information when you enter, submit, or access your personal information.</p>
				<h2 id="6-cookies-and-tracking-technologies">6. Cookies and Tracking Technologies</h2>
				<p>Watpad does not use cookies or other tracking technologies. There is no login or onboarding or
					tracking involved in our application.</p>
				<h2 id="7-third-party-services">7. Third-Party Services</h2>
				<p>Watpad does not integrate any third-party services other than Google Generative AI for AI chat
					and feedback feature.</p>
				<h2 id="8-children-s-privacy">8. Children’s Privacy</h2>
				<p>Watpad is not primarily intended for children. We do not knowingly collect any personal information
					from children under the age of 13. If we become aware that we have collected personal information
					from a child under 13, we will take steps to delete such information from our files as soon as
					possible.</p>
				<h2 id="9-changes-to-the-privacy-policy">9. Changes to the Privacy Policy</h2>
				<p>We may update this Privacy Policy from time to time. When we do, we will notify users through a
					notice on our website. We encourage you to review this Privacy Policy periodically to stay
					informed about how we are protecting your information.</p>
				<h2 id="10-contact-us">10. Contact Us</h2>
				<p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
				<ul>
					<li><strong>Email:</strong> <a href="mailto:subha60kundu@gmail.com">subha60kundu@gmail.com</a></li>
					<li><strong>Address:</strong> Kalyani, Nadia, West Bengal, India 741235</li>
				</ul>
				<p>By using Watpad, you consent to our Privacy Policy.</p>
			</div>
		</main>
	)
}

export default PrivacyPage
