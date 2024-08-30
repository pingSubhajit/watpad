/** @type {import('next').NextConfig} */
import {loadConfig} from 'rioko'


const config = async () => {
	const config = await loadConfig()

	return {
		env: {
			RIOKO_CONFIG: config
		}
	}
}

export default config()
