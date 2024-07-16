import Link from 'next/link'
import Image from 'next/image'
import {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Watpad - Terms of Use',
	description: 'Read the terms of use of Watpad to understand the rules and guidelines for using our Word ' +
		'Association Test practice application. By using Watpad, you agree to abide by these terms.',
	keywords: [
		'Watpad', 'terms of use', 'user agreement', 'wat practice app', 'word association test',
		'ssb practice', 'usage guidelines', 'user responsibilities'
	]
}

const TermsPage = () => {
	return (
		<main className="flex flex-col items-start justify-center gap-8 min-h-lvh w-full mx-auto max-w-[600px] px-8 py-16">
			<header className="flex justify-between items-center w-full">
				<Link href="/">
					<Image src="/logo.svg" alt="Watpad logo" width={180} height={38} className="w-24"/>
				</Link>
			</header>

			<div className="prose lg:prose-xl prose-neutral dark:prose-invert">
				<h1 id="terms-of-use">Terms of Use</h1>
				<p><strong>Effective Date:</strong> July 14, 2024</p>
				<h2 id="1-introduction">1. Introduction</h2>
				<p>Welcome to Watpad, a Word Association Test practice application. These Terms of
					Use (&quot;Terms&quot;) govern your use of Watpad (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;).
					By accessing or using Watpad, you agree to be bound by these Terms. If you do not agree to these
					Terms, please do not use our application.</p>
				<h2 id="2-eligibility">2. Eligibility</h2>
				<p>You must be at least 13 years old to use Watpad. By using Watpad, you represent and warrant that you
					meet this age requirement.</p>
				<h2 id="3-user-accounts">3. User Accounts</h2>
				<p>
					You don't have to create an account to use Watpad. There is no option to create an account or login.
					The AI chat feature is available to all users without any login.
				</p>
				<h2 id="4-user-conduct">4. User Conduct</h2>
				<p>By using Watpad, you agree to:</p>
				<ul>
					<li>Use the application only for lawful purposes.</li>
					<li>Not engage in any activity that could harm or disrupt Watpad or its users.</li>
					<li>Not attempt to gain unauthorized access to any part of the application or its systems.</li>
				</ul>
				<h2 id="5-data-and-privacy">5. Data and Privacy</h2>
				<p>Your use of Watpad is also governed by our Privacy Policy, which outlines how we collect, use, and
					protect your information. By using Watpad, you consent to our data practices as described in our
					Privacy Policy.</p>
				<h2 id="6-intellectual-property">6. Intellectual Property</h2>
				<p><strong>Ownership:</strong> Watpad and its content, including but not limited to text, graphics,
					logos, and software, are the property of Watpad and are protected by copyright and other
					intellectual property laws.</p>
				<p><strong>License:</strong> We grant you a limited, non-exclusive, non-transferable, and revocable
					license to use Watpad in accordance with these Terms. You may not reproduce, distribute, modify, or
					create derivative works of Watpad or its content without our prior written consent.</p>
				<h2 id="7-termination">7. Termination</h2>
				<p>We reserve the right to terminate or suspend your access to Watpad at our discretion,
					without notice, for conduct that we believe violates these Terms or is harmful to other users or
					us.</p>
				<h2 id="8-disclaimers-and-limitation-of-liability">8. Disclaimers and Limitation of Liability</h2>
				<p><strong>As-Is Basis:</strong> Watpad is provided on
					an &quot;as-is&quot; and &quot;as-available&quot; basis. We make no warranties, express or implied,
					regarding the availability, reliability, or accuracy of Watpad.</p>
				<p><strong>Limitation of Liability:</strong> To the fullest extent permitted by law, Watpad shall not be
					liable for any indirect, incidental, special, or consequential damages arising out of or in
					connection with your use of the application.</p>
				<h2 id="9-changes-to-the-terms">9. Changes to the Terms</h2>
				<p>We may update these Terms from time to time. When we do, we will notify users through a
					notice on our website. Your continued use of Watpad after such changes constitutes your acceptance
					of the new Terms.</p>
				<h2 id="10-governing-law">10. Governing Law</h2>
				<p>These Terms shall be governed by and construed in accordance with the laws of the State of West
					Bengal, India, without regard to its conflict of law principles.</p>
				<h2 id="11-contact-us">11. Contact Us</h2>
				<p>If you have any questions or concerns about these Terms, please contact us at:</p>
				<ul>
					<li><strong>Email:</strong> <a href="mailto:subha60kundu@gmail.com">subha60kundu@gmail.com</a></li>
					<li><strong>Address:</strong> Kalyani, Nadia, West Bengal, India 741235</li>
				</ul>
				<p>By using Watpad, you agree to these Terms of Use.</p>
			</div>
		</main>
	)
}

export default TermsPage
